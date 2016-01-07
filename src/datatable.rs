use num;
use num::traits::NumCast;
use std::str::FromStr;

/// A data table consisting of varying column types and headers.
pub struct DataTable {
    pub data_cols: Vec<Box<ColumnData>>,
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

pub trait ColumnData {
    fn len(&self) -> usize;

    fn push(&mut self, val: &str) -> Result<(), DataType>;
}

pub enum DataType {
    Float,
    Integer,
    String,
}

/// A data column with a consistent data type. 
pub struct ColumnBase<T> {
    pub data: Vec<T>,
    // field for 'highest' type possible
    top_type: DataType,
}

impl<T> ColumnBase<T> {
    pub fn empty() -> ColumnBase<T> {
        ColumnBase {
            data: Vec::new(),
            top_type: DataType::Float,
        }
    }
}

impl<T: NumCast> ColumnData for ColumnBase<T> {
    fn len(&self) -> usize {
        self.data.len()
    }

    fn push(&mut self, val: &str) -> Result<(), DataType> {
        match self.top_type {

            DataType::Integer => {
                match i64::from_str(val) {
                    Ok(x) => {
                        self.data.push(num::cast(x).unwrap());
                        Ok(())
                    }
                    Err(_) => Err(DataType::Float)                 
                }
            }

            DataType::Float => {
                match f64::from_str(val) {
                    Ok(x) => {
                        self.data.push(num::cast(x).unwrap());
                        Ok(())
                    }
                    Err(_) => Err(DataType::String)
                }
            }

            _ => Err(DataType::String)
        }
    }
}
