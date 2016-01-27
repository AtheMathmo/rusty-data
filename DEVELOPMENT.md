# Development

This document's intention is to keep track of future development goals. For now it comprises of a simple TODO list. This will soon be improved to include current progress and an approximate timeline.

## TODO:

- Refactor the loader for easier management and testing.
- Fine tuned file loading. e.g.., quotation markers, missing data symbol, etc.
- Plan how to handle missing data in the tables.
- Create some kind of conversion system to go from DataTable to raw data. This should allow us to specify the processing of specific columns. I.e. how many blocks to get, how to process each block (categorical, numeric), and what to do with missing data.


*Now things get less certain*
- Implement some kind of Series<T> struct which can be created from DataColumns and has a concrete generic type. The motivation being we can implement mean() and similar functions.
- Use and_then/or_else for control flow based on file loading attempts. Could try a few sensible defaults and if it fails just return the Err.
- Implement DataViews.