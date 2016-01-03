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

}

/// DataType enum
///
/// Not sure how this should be used.
enum DataType {
	Reals,
	Categorical,
}

/// A data column with a consistent data type. 
pub struct DataCols<T> {
	data_type : DataType,
	pub data: Vec<T>,
	// If categorical - some kind of set for each category

}

impl<T> DataCols<T> {
	pub fn empty() -> DataCols<T> {
		DataCols {
			data_type: DataType::Reals,
			data: Vec::<T>::new(),
		}
	}

	pub fn len(&self) -> usize {
		self.data.len()
	}
}