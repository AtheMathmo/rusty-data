//! The loader module
//!
//! Provides the Loader struct which is used to read data into
//! DataTables.

use std::io;
use std::io::prelude::*;
use std::io::{BufReader, Error, ErrorKind};
use std::fs::File;

use datatable::*;

/// Options used to fine tune the file loading
pub struct LoaderOptions {
    /// True if there are headers present in the file
    pub has_header: bool,
    /// The delimiter character
    pub delimiter: char,
    /// The quote character
    pub quote_marker: Option<char>,
}

impl Default for LoaderOptions {
    fn default() -> LoaderOptions {
        LoaderOptions {
            has_header: false,
            delimiter: ',',
            quote_marker: None,
        }
    }
}
/// Loader struct
///
/// Used to load and process data files into tables.
pub struct Loader<'a> {
    file: &'a str,
    options: LoaderOptions,
}

impl<'a> Loader<'a> {
    /// Constructs a new Loader.
    pub fn new(has_header: bool, file: &str, delimiter: char) -> Loader {
        let options = LoaderOptions {
            has_header: has_header,
            delimiter: delimiter,
            quote_marker: None,
        };

        Loader {
            file: file,
            options: options,
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
            file: file_string,
            options: LoaderOptions::default(),
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

        if self.options.has_header {
            if let Some(line) = lines.next() {
                let line = try!(line);
                let values = LineSplitIter::new(line.to_string(),
                                                self.options.quote_marker,
                                                self.options.delimiter);

                for val in values {
                    let mut column = DataColumn::empty();
                    column.name = Some(val);
                    table.data_cols.push(column);
                }
            }
        } else {
            if let Some(line) = lines.next() {
                let line = try!(line);
                let values = LineSplitIter::new(line.to_string(),
                                                self.options.quote_marker,
                                                self.options.delimiter);

                for val in values {
                    let mut column = DataColumn::empty();
                    column.push(val);

                    table.data_cols.push(column);
                }
            }
        }

        for line in lines {
            let line = try!(line);
            let values = LineSplitIter::new(line.to_string(),
                                                self.options.quote_marker,
                                                self.options.delimiter);


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

/// Iterator to parse a line in a data file.
pub struct LineSplitIter {
    line: String,
    quote_char: Option<char>,
    delimiter: char,
}

impl LineSplitIter {
    /// Construct a new LineSplitIter over the specified line using
    /// the given quote character and delimiter.
    pub fn new(line: String, quote_char: Option<char>, delimiter: char) -> LineSplitIter {
        LineSplitIter {
            line: line,
            quote_char: quote_char,
            delimiter: delimiter,
        }
    }
}

impl Iterator for LineSplitIter {
    type Item = String;

    fn next(&mut self) -> Option<Self::Item> {
        if self.line.len() == 0 {
            return None;
        }

        let drain_offset: Option<usize>;
        if let Some(quote_char) = self.quote_char {
            let mut in_quotes = false;

            drain_offset = self.line
                               .find(|c| {
                                   if c == quote_char {
                                       in_quotes = !in_quotes;
                                       false
                                   } else if c == self.delimiter && !in_quotes {
                                       true
                                   } else {
                                       false
                                   }
                               });

        } else {
            drain_offset = self.line.find(self.delimiter);
        }

        if let Some(offset) = drain_offset {
            let t: String = self.line.drain(..offset).collect();
            self.line = self.line[1..].to_string();

            match self.quote_char {
                None => Some(t),
                Some(quote_char) => Some(t.trim_matches(quote_char).to_string()),
            }
        } else {
            Some(self.line.drain(..).collect())
        }
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
    let loader = Loader::from_file_string(file);

    loader.load_file().unwrap()

}
