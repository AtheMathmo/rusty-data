//! # The rusty-data library
//!
//! This is a scientific data handling library.
//!
//! The core struct of the library is the DataTable. This struct
//! stores the data as Strings and provides conversion methods
//! to cast the data to various types.
//!
//! In addition to the DataTable there is a Loader which is used to
//! read in data from file to tables.

extern crate num;

pub mod loader;
pub mod datatable;
pub mod error;