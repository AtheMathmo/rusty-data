//! The datatable module.
//!
//! Contains the DataTable struct and provides methods
//! for converting the tables to various formats.

use std::str::FromStr;
use std::error::Error;
use std::fmt;
use std::vec::IntoIter;
use std;

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
    pub fn into_consistent_data<T: FromStr>(self) -> Result<Vec<T>, DataError> {
        let mut table_data = Vec::with_capacity(self.cols() * self.rows());
        for d in self.data_cols.into_iter() {
            match d.into_vec() {
                Ok(x) => table_data.extend(x),
                Err(e) => return Err(e),
            }
        }

        Ok(table_data)
    }

    /// Attempts to convert the DataTable into a single Vec.
    ///
    /// Uses column major ordering. Returns an Option.
    pub fn consistent_data<T: FromStr>(&self) -> Option<Vec<T>> {
        let mut table_data = Vec::with_capacity(self.cols() * self.rows());
        for d in self.data_cols.iter() {
            match d.cast() {
                Some(x) => table_data.extend(x),
                None => return None,
            }
        }

        Some(table_data)
    }
}

/// Errors related to Data functions.
#[derive(Debug)]
pub enum DataError {
    /// An error for attempting to cast data types within DataTable.
    DataCastError,
}

impl fmt::Display for DataError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            &DataError::DataCastError => write!(f, "DataCastError"),
        }
    }
}

impl Error for DataError {
    fn description(&self) -> &str {
        match self {
            &DataError::DataCastError => "Failed to cast data.",
        }
    }
}

/// A data column consisting of Strings. 
pub struct DataColumn {
    /// The name associated with the DataColumn.
    pub name: Option<String>,
    data: Vec<String>,
}

impl DataColumn {
    /// Constructs an empty data column.
    pub fn empty() -> DataColumn {
        DataColumn {
            name: None,
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

    /// Pushes a new &str to the column.
    pub fn push(&mut self, val: String) {
        self.data.push(val);
    }

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
