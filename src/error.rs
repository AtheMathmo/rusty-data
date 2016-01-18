use std::fmt;
use std::error::Error;

/// Errors related to Data functions.
#[derive(Debug)]
pub enum DataError {
    /// An error for failed data casting.
    DataCastError,
    /// An error reported when the data state was invalid for the operation.
    InvalidStateError,
}

impl fmt::Display for DataError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            &DataError::DataCastError => write!(f, "DataCastError"),
            &DataError::InvalidStateError => write!(f, "InvalidStateError"),
        }
    }
}

impl Error for DataError {
    fn description(&self) -> &str {
        match self {
            &DataError::DataCastError => "Failed to cast data.",
            &DataError::InvalidStateError => "Operation was not valid for state of object.",
        }
    }
}