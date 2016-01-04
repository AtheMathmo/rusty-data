/// A data table consisting of varying column types and headers.
pub struct DataTable {
	pub data_cols: Vec<DataCols<f64>>,
}

impl DataTable {

	pub fn empty() -> DataTable {
		DataTable {
			data_cols: Vec::new(),
		}
	}

	pub fn cols(&self) -> usize {
		self.data_cols.len()
	}

	pub fn rows(&self) -> usize {
		if self.data_cols.len() > 0 {
			return self. data_cols[0].len();
		}

		0usize
	}

}


/// A data column with a consistent data type. 
pub struct DataCols<T> {
	pub data: Vec<T>,
}

impl<T> DataCols<T> {
	pub fn empty() -> DataCols<T> {
		DataCols {
			data: Vec::<T>::new(),
		}
	}

	pub fn len(&self) -> usize {
		self.data.len()
	}
}