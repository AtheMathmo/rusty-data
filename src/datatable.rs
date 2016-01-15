use num;
use num::traits::NumCast;
use std::str::FromStr;

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
}

pub enum DataCell {
    Float32(f32),
    Float64(f64),
    Int32(i32),
    Int64(i64),
    String(String),
}

/// A data column with a consistent data type. 
pub struct DataColumn {
    pub data: Vec<DataCell>,
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

    pub fn push(&mut self, val: &str) {
        match i64::from_str(val) {
            Ok(x) => {
                self.data.push(DataCell::Int64(x));
                return;
            }
            Err(_) => {},           
        }


        match f64::from_str(val) {
            Ok(x) => {
                self.data.push(DataCell::Float64(x));
                return;
            }
            Err(_) => {},
        }
        
        self.data.push(DataCell::String(val.to_owned()));
    }
}
