# Development

This document's intention is to keep track of future development goals. For now it comprises of a simple TODO list. This will soon be improved to include current progress and an approximate timeline.

## TODO:

- Refactor the loader for easier management and testing.
- Allow both row and column major data mapping for the table. Though the data will remain at it's base column-major we will support converting the table to row-major.
- Implement a HashSet on the Columns for categorical data. This should be used to keep track of the number of unique categories.
- Fine tuned file loading. e.g.., quotation markers, missing data symbol, etc.

*Now things get less certain*
- Implement some kind of Series<T> struct which can be created from DataColumns and has a concrete generic type. The motivation being we can implement mean() and similar functions.
- Use and_then for control flow based on file loading attempts. Could try a few sensible defaults and if it fails just return the Err.