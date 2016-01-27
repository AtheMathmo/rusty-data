//! The datatable module.
//!
//! Contains the DataTable struct and provides methods
//! for converting the tables to various formats.

use std;
use std::collections::HashMap;
use std::str::FromStr;
use std::ops::Index;
use std::vec::IntoIter;

use num::traits::{One, Zero};

use error::DataError;

/// A data table consisting of varying column types and headers.
pub struct DataTable {
    /// Vector of DataColumns.
    pub data_cols: Vec<DataColumn>,
}

impl DataTable {
    /// Constructs an empty DataTable
    pub fn empty() -> DataTable {
        DataTable { data_cols: Vec::new() }
    }

    /// The number of columns in the DataTable.
    pub fn cols(&self) -> usize {
        self.data_cols.len()
    }

    /// The number of rows in the DataTable.
    pub fn rows(&self) -> usize {
        if self.data_cols.len() > 0 {
            return self.data_cols[0].len();
        }

        0usize
    }

    /// Shrinks the table and it's underlying columns.
    pub fn shrink_to_fit(&mut self) {
        for col in self.data_cols.iter_mut() {
            col.shrink_to_fit();
        }

        self.data_cols.shrink_to_fit();
    }

    /// Consumes self and attempts to convert the DataTable into a single Vec.
    ///
    /// Uses column major ordering.
    ///
    /// # Failures
    ///
    /// - DataCastError : Returned when the data cannot be cast into the requested type.
    pub fn into_consistent_data<T: FromStr>(self, row_major: bool) -> Result<Vec<T>, DataError> {
        let cols = self.cols();
        let rows = self.rows();

        let mut table_data = Vec::with_capacity(cols * rows);
        if row_major {
            let mut column_iters = Vec::new();

            for d in self.data_cols.into_iter() {
                column_iters.push(d.into_iter_cast::<T>());
            }

            for _ in 0..rows {
                for i in 0..cols {
                    match column_iters[i].next() {
                        Some(Ok(x)) => table_data.push(x),
                        Some(Err(_)) => return Err(DataError::DataCastError),
                        None =>{},
                    }
                }
            }
        }
        else {
            for d in self.data_cols.into_iter() {
                match d.into_vec() {
                    Ok(x) => table_data.extend(x),
                    Err(e) => return Err(e),
                }
            }
        }

        if table_data.len() != cols*rows {
            return Err(DataError::InvalidStateError);
        }
        

        Ok(table_data)
    }
}

impl Index<usize> for DataTable { 
    type Output = DataColumn;

    fn index(&self, idx: usize) -> &DataColumn {
        &self.data_cols[idx]
    }
}

/// A data column consisting of Strings. 
pub struct DataColumn {
    /// The name associated with the DataColumn.
    pub name: Option<String>,
    categories: Option<HashMap<String, usize>>,
    data: Vec<String>,
}

impl DataColumn {
    /// Constructs an empty data column.
    pub fn empty() -> DataColumn {
        DataColumn {
            name: None,
            categories: None,
            data: Vec::new(),
        }
    }

    /// Gets the length of the data column.
    pub fn len(&self) -> usize {
        self.data.len()
    }

    /// Gets an immutable reference to the underlying data.
    pub fn data(&self) -> &Vec<String> {
        &self.data
    }

    /// Gets an immutable reference to the categories Option.
    pub fn categories(&self) -> Option<HashMap<String, usize>> {
        match self.categories {
            None => None,
            Some(ref x) => Some(x.clone()),
        }
    }

    /// Update the categories set using the current data.
    ///
    /// # Examples
    ///
    /// ```
    /// use rusty_data::datatable::DataColumn;
    ///
    /// let mut dc = DataColumn::empty();
    ///
    /// dc.push("Class1".to_string());
    /// dc.push("Class2".to_string());
    /// dc.push("Class2".to_string());
    ///
    /// dc.update_categories();
    /// let categories = dc.categories().unwrap();
    ///
    /// // Note that `contains` requires a reference so we pass an &str.
    /// assert!(categories.contains_key("Class2"));
    /// assert_eq!(categories.len(), 2);
    /// ```
    pub fn update_categories(&mut self) {
        let mut categories = HashMap::new();
        let mut count = 0usize;

        for s in self.data.iter() {
            if !categories.contains_key(s) {
                categories.insert(s.clone(), count);
                count += 1usize;
            }

        }
        categories.shrink_to_fit();
        self.categories = Some(categories);
    }

    /// Produce a numerical vector representation of the category data.
    ///
    /// # Examples
    ///
    /// ```
    /// use rusty_data::datatable::DataColumn;
    ///
    /// let mut dc = DataColumn::empty();
    ///
    /// dc.push("Class1".to_string());
    /// dc.push("Class2".to_string());
    /// dc.push("Class2".to_string());
    ///
    /// dc.update_categories();
    ///
    /// let data = dc.numeric_category_data::<f64>().unwrap();
    ///
    /// println!("The data is: {:?}", data);
    /// ```
    pub fn numeric_category_data<T: Zero + One>(&self) -> Result<Vec<Vec<T>>, DataError> {
        if let Some(ref categories) = self.categories {
            let mut outer_vec = Vec::new();

            for _ in 0..categories.len() {
                outer_vec.push(Vec::<T>::new())
            }

            for d in self.data.iter() {
                match categories.get(d) {
                    Some(x) => {
                        for i in 0..categories.len() {
                            if *x == i {
                                outer_vec[i].push(T::one());
                            } else {
                                outer_vec[i].push(T::zero());
                            }
                        }
                    }
                    None => {
                        return Err(DataError::InvalidStateError);
                    }
                }
            }
            return Ok(outer_vec);
        }

        Err(DataError::InvalidStateError)
    }

    /// Pushes a new &str to the column.
    pub fn push(&mut self, val: String) {
        self.data.push(val);
    }

    /// Try to get the element at the index as the requested type.
    ///
    /// # Failures
    ///
    /// - DataCastError : The element at the given index could not be parsed to this type. 
    pub fn get_as<T: FromStr>(&self, idx: usize) -> Result<T, DataError> {
        match T::from_str(self.data[idx].as_ref()) {
            Ok(x) => Ok(x),
            Err(_) => Err(DataError::DataCastError),
        }
    }

    /// Shrink the column to fit the data.
    pub fn shrink_to_fit(&mut self) {
        self.data.shrink_to_fit();
    }

    /// Consumes self and returns a Vec of the requested type.
    ///
    /// # Failures
    ///
    /// - DataCastError : Returned when the data cannot be parsed to the requested type.
    pub fn into_vec<T: FromStr>(self) -> Result<Vec<T>, DataError> {
        let mut casted_data = Vec::<T>::with_capacity(self.data.len());

        for d in self.data.into_iter() {
            match T::from_str(d.as_ref()) {
                Ok(x) => casted_data.push(x),
                Err(_) => return Err(DataError::DataCastError),
            }
        }

        Ok(casted_data)
    }

    /// Cast the data to the requested type.
    ///
    /// Returns a Vec of the requested type wrapped in an option.
    pub fn cast<T: FromStr>(&self) -> Option<Vec<T>> {
        let mut casted_data = Vec::<T>::with_capacity(self.data.len());

        for d in self.data.iter() {
            match T::from_str(&d[..]) {
                Ok(x) => casted_data.push(x),
                Err(_) => return None,
            }
        }

        Some(casted_data)
    }

    /// Consumes self and returns an iterator which parses
    /// the data to the specified type returning results.
    ///
    /// The iterator will return a result on `next()` detailing
    /// the outcome of the parse.
    pub fn into_iter_cast<U: FromStr>
        (self)
         -> std::iter::Map<IntoIter<String>, fn(String) -> Result<U, <U as FromStr>::Err>>
        where U: FromStr
    {
        from_str_iter::<_, U>(self.data.into_iter())
    }
}

/// Converts the iterator to a FromStr iterator.
fn from_str_iter<I, U>
    (iter: I)
     -> std::iter::Map<I, fn(<I as Iterator>::Item) -> Result<U, <U as FromStr>::Err>>
    where I: Iterator,
          <I as Iterator>::Item: AsRef<str>,
          U: FromStr
{
    fn from_str_fn<T, U>(item: T) -> Result<U, <U as FromStr>::Err>
        where T: AsRef<str>,
              U: FromStr
    {
        FromStr::from_str(item.as_ref())
    }
    iter.map(from_str_fn)
}

impl Index<usize> for DataColumn { 
    type Output = String;
    fn index(&self, idx: usize) -> &String {
        &self.data[idx]
    }
}
