use std::io;
use std::io::prelude::*;
use std::io::{BufReader, Error, ErrorKind};
use std::fs::File;
use std::str::FromStr;
use datatable::*;

/// Loader struct
///
/// Used to load and process data files into tables.
pub struct Loader<'a> {
    pub header: bool,
    pub file: &'a str,
    pub delimiter: char,
}

impl<'a> Loader<'a> {
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

        // Should handle header here

        let mut lines = reader.lines();

        if let Some(line) = lines.next() {
            let line = try!(line);
            let values = line.split(self.delimiter);

            for val in values {
                let mut column = DataCols::<f64>::empty();
                // Unwrap and panic for now.
                // Should handle more carefully in future.
                column.data.push(f64::from_str(val).unwrap());

                table.data_cols.push(column);
            }
        }

        for line in lines {
            let line = try!(line);
            let values = line.split(self.delimiter);

            let mut idx = 0usize;

            for (i, val) in values.enumerate() {
                idx = i;
                if idx > table.cols() {
                    return Err(Error::new(ErrorKind::InvalidInput, "Malformed data format on."));
                }
                // Unwrap and panic for now.
                // Should handle more carefully in future.
                let val = f64::from_str(val).unwrap();
                table.data_cols[idx].data.push(val);
            }

            if idx != table.cols()-1 {
                return Err(Error::new(ErrorKind::InvalidInput, "Malformed data format."));
            }
        }

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
        header: false,
        file: file,
        delimiter: ',',
    };

    loader.load_file().unwrap()

}
