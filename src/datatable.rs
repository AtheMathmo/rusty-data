use std::str::FromStr;
use std::error::Error;
use std::fmt;


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
    pub fn into_consistent_data<T: FromStr>(self) -> Result<Vec<T>, DataCastError> {
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
pub struct DataCastError;

impl fmt::Display for DataCastError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "DataCastError")
    }
}

impl Error for DataCastError {
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

    pub fn into_vec<T: FromStr>(self) -> Result<Vec<T>, DataCastError> {
        let mut casted_data = Vec::<T>::with_capacity(self.data.len());

        for d in self.data.into_iter() {
            match T::from_str(&d[..]) {
                Ok(x) => casted_data.push(x),
                Err(_) => return Err(DataCastError),
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
}