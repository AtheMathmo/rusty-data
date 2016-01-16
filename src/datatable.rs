use std::str::FromStr;
use std::error::Error;
use std::fmt;

use std::marker::PhantomData;

/// A data table consisting of varying column types and headers.
pub struct DataTable {
    pub data_cols: Vec<DataColumn>,
}

impl DataTable {
    pub fn empty() -> DataTable {
        DataTable { data_cols: Vec::new() }
    }

    pub fn cols(&self) -> usize {
        self.data_cols.len()
    }

    pub fn rows(&self) -> usize {
        if self.data_cols.len() > 0 {
            return self.data_cols[0].len();
        }

        0usize
    }

    /// Shrinks the table and it's underlying
    pub fn shrink_to_fit(&mut self) {
        for col in self.data_cols.iter_mut() {
            col.shrink_to_fit();
        }

        self.data_cols.shrink_to_fit();
    }

    /// Attempt to convert the data table into a single Vec.
    ///
    /// Uses column major ordering.
    ///
    /// # Failures
    ///
    /// - DataCastError : Returned then the data cannot be cast into the requested type.
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
}

/// An error for attempting an into conversion.
#[derive(Debug)]
pub enum DataError {
    DataCastError,
}

impl fmt::Display for DataError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "DataCastError")
    }
}

impl Error for DataError {
    fn description(&self) -> &str {
        "Failed to cast data."
    }
}

/// A data column with a consistent data type. 
pub struct DataColumn {
    data: Vec<String>,
}

impl DataColumn {
    pub fn empty() -> DataColumn {
        DataColumn {
            data: Vec::new(),
        }
    }

    pub fn len(&self) -> usize {
        self.data.len()
    }

    pub fn data(&self) -> &Vec<String> {
        &self.data
    }

    pub fn push(&mut self, val: &str) {
        self.data.push(val.to_owned());
    }

    pub fn into_vec<T: FromStr>(self) -> Result<Vec<T>, DataError> {
        let mut casted_data = Vec::<T>::with_capacity(self.data.len());

        for d in self.data.into_iter() {
            match T::from_str(&d[..]) {
                Ok(x) => casted_data.push(x),
                Err(_) => return Err(DataError::DataCastError),
            }
        }

        Ok(casted_data)
    }

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

    pub fn shrink_to_fit(&mut self) {
        self.data.shrink_to_fit();
    }

    pub fn into_iter<T: FromStr>(self) -> IntoColumnIterator<T> {
        IntoColumnIterator {
            column_data: self.data,
            index: 0usize,
            phantom: PhantomData::<T>,
        }
    }
}

pub struct IntoColumnIterator<T : FromStr> {
    column_data: Vec<String>,
    index: usize,
    phantom: PhantomData<T>,
}

impl<T : FromStr> Iterator for IntoColumnIterator<T> {
    type Item = T;
    
    fn next(&mut self) -> Option<T> {
        match self.column_data.get(self.index) {
            None => None,
            Some(elt) => {
                self.index += 1;
                match T::from_str(&elt[..]) {
                    Ok(x) => Some(x),
                    Err(_) => None,
                }
            }
        }
    }
}