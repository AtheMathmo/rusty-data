//! The loader module
//!
//! Provides the Loader struct which is used to read data into
//! DataTables.

use std::io;
use std::io::prelude::*;
use std::io::{BufReader, Error, ErrorKind};
use std::fs::File;
use datatable::*;

/// Loader struct
///
/// Used to load and process data files into tables.
pub struct Loader<'a> {
    /// True if there are headers present in the file
    pub has_header: bool,
    file: &'a str,
    /// The delimiter character
    pub delimiter: char,
}

impl<'a> Loader<'a> {
    /// Constructs a new Loader.
    pub fn new(has_header: bool, file: &str, delimiter: char) -> Loader {
        Loader {
            has_header: has_header,
            file: file,
            delimiter: delimiter,
        }
    }

    /// Creates a loader with default settings from a file string.
    ///
    /// The default settings are as follows:
    ///
    /// - has_header : false
    /// - delimiter : ','
    pub fn from_file_string(file_string: &str) -> Loader {
        Loader {
            has_header: false,
            file: file_string,
            delimiter: ',',
        }
    }

    /// Load the file from the loader with given delimiter.
    ///
    /// Pretty rudimentary with poor error handling.
    ///
    /// # Panics
    ///
    /// - The input data is not a float.
    ///
    /// # Failures
    ///
    /// - The input data is malformed (missing data, non-uniform rows etc.)
    pub fn load_file(self) -> Result<DataTable, io::Error> {
        let f = try!(File::open(self.file));
        let reader = BufReader::new(f);

        let mut table = DataTable::empty();



        let mut lines = reader.lines();

        if self.has_header {
            if let Some(line) = lines.next() {
                let line = try!(line);
                let values = line.split(self.delimiter);

                for val in values {
                    let mut column = DataColumn::empty();
                    column.name = Some(val.to_owned());
                    table.data_cols.push(column);
                }
            }
        } else {
            if let Some(line) = lines.next() {
                let line = try!(line);
                let values = line.split(self.delimiter);

                for val in values {
                    let mut column = DataColumn::empty();
                    column.push(val);

                    table.data_cols.push(column);
                }
            }
        }

        for line in lines {
            let line = try!(line);
            let values = line.split(self.delimiter);

            let mut idx = 0usize;

            for (i, val) in values.enumerate() {
                idx = i;
                if idx > table.cols() {
                    return Err(Error::new(ErrorKind::InvalidInput, "Malformed data format."));
                }

                table.data_cols[idx].push(val);
            }

            if idx != table.cols() - 1 {
                return Err(Error::new(ErrorKind::InvalidInput, "Malformed data format."));
            }
        }

        table.shrink_to_fit();
        Ok(table)
    }
}

/// Load the specified file to a DataTable.
///
/// # Examples
///
/// ```no_run
/// use rusty_data::loader::load_file;
///
/// let table = load_file("path/to/file.data");
/// ```
pub fn load_file(file: &str) -> DataTable {
    let loader = Loader {
        has_header: false,
        file: file,
        delimiter: ',',
    };

    loader.load_file().unwrap()

}
