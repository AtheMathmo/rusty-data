use std::io;
use std::io::prelude::*;
use std::io::BufReader;
use std::fs::File;
use std::str::FromStr;
use datatable::*;

pub struct Loader<'a> {
	file: &'a str,
	delimiter: char,
}

impl<'a> Loader<'a> {

	/// Load the file from the loader with given delimiter.
	///
	/// Pretty rudimentary with poor error handling.
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

		    for (i,val) in values.enumerate() {

				// Unwrap and panic for now.
				// Should handle more carefully in future.
				let val = f64::from_str(val).unwrap();
				table.data_cols[i].data.push(val);
			}
		}

		Ok(table)
	}
}