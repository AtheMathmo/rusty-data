var searchIndex = {};
searchIndex['rusty_data'] = {"items":[[0,"loader","rusty_data","The loader module",null,null],[3,"LoaderOptions","rusty_data::loader","Options used to fine tune the file loading",null,null],[12,"has_header","","True if there are headers present in the file",0,null],[12,"delimiter","","The delimiter character",0,null],[12,"quote_marker","","The quote character",0,null],[3,"Loader","","Loader struct",null,null],[3,"LineSplitIter","","Iterator to parse a line in a data file.",null,null],[5,"load_file","","Load the specified file to a DataTable.",null,{"inputs":[{"name":"str"}],"output":{"name":"datatable"}}],[11,"default","","",0,{"inputs":[{"name":"loaderoptions"}],"output":{"name":"loaderoptions"}}],[11,"new","","Constructs a new Loader.",1,{"inputs":[{"name":"loader"},{"name":"bool"},{"name":"str"},{"name":"char"}],"output":{"name":"loader"}}],[11,"from_file_string","","Creates a loader with default settings from a file string.",1,{"inputs":[{"name":"loader"},{"name":"str"}],"output":{"name":"loader"}}],[11,"load_file","","Load the file from the loader with given delimiter.",1,{"inputs":[{"name":"loader"}],"output":{"name":"result"}}],[11,"new","","Construct a new LineSplitIter over the specified line using\nthe given quote character and delimiter.",2,{"inputs":[{"name":"linesplititer"},{"name":"string"},{"name":"option"},{"name":"char"}],"output":{"name":"linesplititer"}}],[11,"next","","",2,{"inputs":[{"name":"linesplititer"}],"output":{"name":"option"}}],[0,"datatable","rusty_data","The datatable module.",null,null],[3,"DataTable","rusty_data::datatable","A data table consisting of varying column types and headers.",null,null],[12,"data_cols","","Vector of DataColumns.",3,null],[3,"DataColumn","","A data column consisting of Strings.",null,null],[12,"name","","The name associated with the DataColumn.",4,null],[11,"empty","","Constructs an empty DataTable",3,{"inputs":[{"name":"datatable"}],"output":{"name":"datatable"}}],[11,"cols","","The number of columns in the DataTable.",3,{"inputs":[{"name":"datatable"}],"output":{"name":"usize"}}],[11,"rows","","The number of rows in the DataTable.",3,{"inputs":[{"name":"datatable"}],"output":{"name":"usize"}}],[11,"shrink_to_fit","","Shrinks the table and it's underlying columns.",3,{"inputs":[{"name":"datatable"}],"output":null}],[11,"into_consistent_data","","Consumes self and attempts to convert the DataTable into a single Vec.",3,{"inputs":[{"name":"datatable"},{"name":"bool"}],"output":{"name":"result"}}],[11,"index","","",3,{"inputs":[{"name":"datatable"},{"name":"usize"}],"output":{"name":"datacolumn"}}],[11,"empty","","Constructs an empty data column.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"datacolumn"}}],[11,"len","","Gets the length of the data column.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"usize"}}],[11,"data","","Gets an immutable reference to the underlying data.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"vec"}}],[11,"categories","","Gets an immutable reference to the categories Option.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"option"}}],[11,"update_categories","","Update the categories set using the current data.",4,{"inputs":[{"name":"datacolumn"}],"output":null}],[11,"numeric_category_data","","Produce a numerical vector representation of the category data.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"result"}}],[11,"push","","Pushes a new &str to the column.",4,{"inputs":[{"name":"datacolumn"},{"name":"string"}],"output":null}],[11,"get_as","","Try to get the element at the index as the requested type.",4,{"inputs":[{"name":"datacolumn"},{"name":"usize"}],"output":{"name":"result"}}],[11,"shrink_to_fit","","Shrink the column to fit the data.",4,{"inputs":[{"name":"datacolumn"}],"output":null}],[11,"into_vec","","Consumes self and returns a Vec of the requested type.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"result"}}],[11,"cast","","Cast the data to the requested type.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"option"}}],[11,"into_iter_cast","","Consumes self and returns an iterator which parses\nthe data to the specified type returning results.",4,{"inputs":[{"name":"datacolumn"}],"output":{"name":"map"}}],[11,"index","","",4,{"inputs":[{"name":"datacolumn"},{"name":"usize"}],"output":{"name":"string"}}],[0,"error","rusty_data","Module for errors within the rusty-data crate.",null,null],[4,"DataError","rusty_data::error","Errors related to Data functions.",null,null],[13,"DataCastError","","An error for failed data casting.",5,null],[13,"InvalidStateError","","An error reported when the data state was invalid for the operation.",5,null],[11,"fmt","","",5,{"inputs":[{"name":"dataerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"dataerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",5,{"inputs":[{"name":"dataerror"}],"output":{"name":"str"}}]],"paths":[[3,"LoaderOptions"],[3,"Loader"],[3,"LineSplitIter"],[3,"DataTable"],[3,"DataColumn"],[4,"DataError"]]};
searchIndex['num'] = {"items":[[5,"zero","num","Returns the additive identity, `0`.",null,{"inputs":[],"output":{"name":"t"}}],[5,"one","","Returns the multiplicative identity, `1`.",null,{"inputs":[],"output":{"name":"t"}}],[5,"abs","","Computes the absolute value.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"abs_sub","","The positive difference of two numbers.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"signum","","Returns the sign of the number.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"pow","","Raises a value to the power of exp, using exponentiation by squaring.",null,{"inputs":[{"name":"t"},{"name":"usize"}],"output":{"name":"t"}}],[0,"complex","","Complex numbers.",null,null],[3,"Complex","num::complex","A complex number in Cartesian form.",null,null],[12,"re","","Real portion of the complex number",0,null],[12,"im","","Imaginary portion of the complex number",0,null],[6,"Complex32","","",null,null],[6,"Complex64","","",null,null],[11,"fmt","","",0,{"inputs":[{"name":"complex"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"hash","","",0,null],[11,"clone","","",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"eq","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"bool"}}],[11,"new","","Create a new Complex",0,{"inputs":[{"name":"complex"},{"name":"t"},{"name":"t"}],"output":{"name":"complex"}}],[11,"norm_sqr","","Returns the square of the norm (since `T` doesn't necessarily\nhave a sqrt function), i.e. `re^2 + im^2`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"t"}}],[11,"scale","","Multiplies `self` by the scalar `t`.",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"unscale","","Divides `self` by the scalar `t`.",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"conj","","Returns the complex conjugate. i.e. `re - i im`",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"inv","","Returns `1/self`",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"norm","","Calculate |self|",0,{"inputs":[{"name":"complex"}],"output":{"name":"t"}}],[11,"arg","","Calculate the principal Arg of self.",0,{"inputs":[{"name":"complex"}],"output":{"name":"t"}}],[11,"to_polar","","Convert to polar form (r, theta), such that `self = r * exp(i\n* theta)`",0,null],[11,"from_polar","","Convert a polar representation into a complex number.",0,{"inputs":[{"name":"complex"},{"name":"t"},{"name":"t"}],"output":{"name":"complex"}}],[11,"exp","","Computes `e^(self)`, where `e` is the base of the natural logarithm.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"ln","","Computes the principal value of natural logarithm of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"sqrt","","Computes the principal value of the square root of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"sin","","Computes the sine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"cos","","Computes the cosine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"tan","","Computes the tangent of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"asin","","Computes the principal value of the inverse sine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"acos","","Computes the principal value of the inverse cosine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"atan","","Computes the principal value of the inverse tangent of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"sinh","","Computes the hyperbolic sine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"cosh","","Computes the hyperbolic cosine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"tanh","","Computes the hyperbolic tangent of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"asinh","","Computes the principal value of inverse hyperbolic sine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"acosh","","Computes the principal value of inverse hyperbolic cosine of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"atanh","","Computes the principal value of inverse hyperbolic tangent of `self`.",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"is_nan","","Checks if the given complex number is NaN",0,{"inputs":[{"name":"complex"}],"output":{"name":"bool"}}],[11,"is_infinite","","Checks if the given complex number is infinite",0,{"inputs":[{"name":"complex"}],"output":{"name":"bool"}}],[11,"is_finite","","Checks if the given complex number is finite",0,{"inputs":[{"name":"complex"}],"output":{"name":"bool"}}],[11,"is_normal","","Checks if the given complex number is normal",0,{"inputs":[{"name":"complex"}],"output":{"name":"bool"}}],[11,"from","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"from","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"add","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"add","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"sub","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"sub","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"mul","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"mul","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"div","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"div","","",0,{"inputs":[{"name":"complex"},{"name":"complex"}],"output":{"name":"complex"}}],[11,"neg","","",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"add","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"sub","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"mul","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"div","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"add","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"sub","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"mul","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"div","","",0,{"inputs":[{"name":"complex"},{"name":"t"}],"output":{"name":"complex"}}],[11,"zero","","",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"is_zero","","",0,{"inputs":[{"name":"complex"}],"output":{"name":"bool"}}],[11,"one","","",0,{"inputs":[{"name":"complex"}],"output":{"name":"complex"}}],[11,"fmt","","",0,{"inputs":[{"name":"complex"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"integer","num","Integer trait and functions.",null,null],[5,"div_rem","num::integer","Simultaneous integer division and modulus",null,null],[5,"div_floor","","Floored integer division",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"mod_floor","","Floored integer modulus",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"div_mod_floor","","Simultaneous floored integer division and modulus",null,null],[5,"gcd","","Calculates the Greatest Common Divisor (GCD) of the number and `other`. The\nresult is always positive.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"lcm","","Calculates the Lowest Common Multiple (LCM) of the number and `other`.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[8,"Integer","","",null,null],[10,"div_floor","","Floored integer division.",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"self"}}],[10,"mod_floor","","Floored integer modulo, satisfying:",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"self"}}],[10,"gcd","","Greatest Common Divisor (GCD).",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"self"}}],[10,"lcm","","Lowest Common Multiple (LCM).",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"self"}}],[10,"divides","","Deprecated, use `is_multiple_of` instead.",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"bool"}}],[10,"is_multiple_of","","Returns `true` if `other` is a multiple of `self`.",1,{"inputs":[{"name":"integer"},{"name":"self"}],"output":{"name":"bool"}}],[10,"is_even","","Returns `true` if the number is even.",1,{"inputs":[{"name":"integer"}],"output":{"name":"bool"}}],[10,"is_odd","","Returns `true` if the number is odd.",1,{"inputs":[{"name":"integer"}],"output":{"name":"bool"}}],[10,"div_rem","","Simultaneous truncated integer division and modulus.\nReturns `(quotient, remainder)`.",1,null],[11,"div_mod_floor","","Simultaneous floored integer division and modulus.\nReturns `(quotient, remainder)`.",1,null],[0,"iter","num","External iterators for generic mathematics",null,null],[3,"Range","num::iter","An iterator over the range [start, stop)",null,null],[3,"RangeInclusive","","An iterator over the range [start, stop]",null,null],[3,"RangeStep","","An iterator over the range [start, stop) by `step`. It handles overflow by stopping.",null,null],[3,"RangeStepInclusive","","An iterator over the range [start, stop] by `step`. It handles overflow by stopping.",null,null],[5,"range","","Returns an iterator over the given range [start, stop) (that is, starting\nat start (inclusive), and ending at stop (exclusive)).",null,{"inputs":[{"name":"a"},{"name":"a"}],"output":{"name":"range"}}],[5,"range_inclusive","","Return an iterator over the range [start, stop]",null,{"inputs":[{"name":"a"},{"name":"a"}],"output":{"name":"rangeinclusive"}}],[5,"range_step","","Return an iterator over the range [start, stop) by `step`. It handles overflow by stopping.",null,{"inputs":[{"name":"a"},{"name":"a"},{"name":"a"}],"output":{"name":"rangestep"}}],[5,"range_step_inclusive","","Return an iterator over the range [start, stop] by `step`. It handles overflow by stopping.",null,{"inputs":[{"name":"a"},{"name":"a"},{"name":"a"}],"output":{"name":"rangestepinclusive"}}],[11,"clone","","",2,{"inputs":[{"name":"range"}],"output":{"name":"range"}}],[11,"next","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"size_hint","","",2,null],[11,"next_back","","",2,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"clone","","",3,{"inputs":[{"name":"rangeinclusive"}],"output":{"name":"rangeinclusive"}}],[11,"next","","",3,{"inputs":[{"name":"rangeinclusive"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"rangeinclusive"}],"output":{"name":"option"}}],[11,"clone","","",4,{"inputs":[{"name":"rangestep"}],"output":{"name":"rangestep"}}],[11,"next","","",4,{"inputs":[{"name":"rangestep"}],"output":{"name":"option"}}],[11,"clone","","",5,{"inputs":[{"name":"rangestepinclusive"}],"output":{"name":"rangestepinclusive"}}],[11,"next","","",5,{"inputs":[{"name":"rangestepinclusive"}],"output":{"name":"option"}}],[0,"traits","num","Numeric traits for generic mathematics",null,null],[3,"ParseFloatError","num::traits","",null,null],[12,"kind","","",6,null],[4,"FloatErrorKind","","",null,null],[13,"Empty","","",7,null],[13,"Invalid","","",7,null],[5,"cast","","Cast from one machine scalar to another.",null,{"inputs":[{"name":"t"}],"output":{"name":"option"}}],[8,"Num","","The base trait for numeric types",null,null],[16,"FromStrRadixErr","","Parse error for `from_str_radix`",8,null],[10,"from_str_radix","","Convert from a string and radix <= 36.",8,{"inputs":[{"name":"num"},{"name":"str"},{"name":"u32"}],"output":{"name":"result"}}],[8,"Zero","","Defines an additive identity element for `Self`.",null,null],[10,"zero","","Returns the additive identity element of `Self`, `0`.",9,{"inputs":[{"name":"zero"}],"output":{"name":"self"}}],[10,"is_zero","","Returns `true` if `self` is equal to the additive identity.",9,{"inputs":[{"name":"zero"}],"output":{"name":"bool"}}],[8,"One","","Defines a multiplicative identity element for `Self`.",null,null],[10,"one","","Returns the multiplicative identity element of `Self`, `1`.",10,{"inputs":[{"name":"one"}],"output":{"name":"self"}}],[8,"Signed","","Useful functions for signed numbers (i.e. numbers that can be negative).",null,null],[10,"abs","","Computes the absolute value.",11,{"inputs":[{"name":"signed"}],"output":{"name":"self"}}],[10,"abs_sub","","The positive difference of two numbers.",11,{"inputs":[{"name":"signed"},{"name":"self"}],"output":{"name":"self"}}],[10,"signum","","Returns the sign of the number.",11,{"inputs":[{"name":"signed"}],"output":{"name":"self"}}],[10,"is_positive","","Returns true if the number is positive and false if the number is zero or negative.",11,{"inputs":[{"name":"signed"}],"output":{"name":"bool"}}],[10,"is_negative","","Returns true if the number is negative and false if the number is zero or positive.",11,{"inputs":[{"name":"signed"}],"output":{"name":"bool"}}],[8,"Unsigned","","A trait for values which cannot be negative",null,null],[8,"Bounded","","Numbers which have upper and lower bounds",null,null],[10,"min_value","","returns the smallest finite number this type can represent",12,{"inputs":[{"name":"bounded"}],"output":{"name":"self"}}],[10,"max_value","","returns the largest finite number this type can represent",12,{"inputs":[{"name":"bounded"}],"output":{"name":"self"}}],[8,"Saturating","","Saturating math operations",null,null],[10,"saturating_add","","Saturating addition operator.\nReturns a+b, saturating at the numeric bounds instead of overflowing.",13,{"inputs":[{"name":"saturating"},{"name":"self"}],"output":{"name":"self"}}],[10,"saturating_sub","","Saturating subtraction operator.\nReturns a-b, saturating at the numeric bounds instead of overflowing.",13,{"inputs":[{"name":"saturating"},{"name":"self"}],"output":{"name":"self"}}],[8,"CheckedAdd","","Performs addition that returns `None` instead of wrapping around on\noverflow.",null,null],[10,"checked_add","","Adds two numbers, checking for overflow. If overflow happens, `None` is\nreturned.",14,{"inputs":[{"name":"checkedadd"},{"name":"self"}],"output":{"name":"option"}}],[8,"CheckedSub","","Performs subtraction that returns `None` instead of wrapping around on underflow.",null,null],[10,"checked_sub","","Subtracts two numbers, checking for underflow. If underflow happens,\n`None` is returned.",15,{"inputs":[{"name":"checkedsub"},{"name":"self"}],"output":{"name":"option"}}],[8,"CheckedMul","","Performs multiplication that returns `None` instead of wrapping around on underflow or\noverflow.",null,null],[10,"checked_mul","","Multiplies two numbers, checking for underflow or overflow. If underflow\nor overflow happens, `None` is returned.",16,{"inputs":[{"name":"checkedmul"},{"name":"self"}],"output":{"name":"option"}}],[8,"CheckedDiv","","Performs division that returns `None` instead of panicking on division by zero and instead of\nwrapping around on underflow and overflow.",null,null],[10,"checked_div","","Divides two numbers, checking for underflow, overflow and division by\nzero. If any of that happens, `None` is returned.",17,{"inputs":[{"name":"checkeddiv"},{"name":"self"}],"output":{"name":"option"}}],[8,"PrimInt","","",null,null],[10,"count_ones","","Returns the number of ones in the binary representation of `self`.",18,{"inputs":[{"name":"primint"}],"output":{"name":"u32"}}],[10,"count_zeros","","Returns the number of zeros in the binary representation of `self`.",18,{"inputs":[{"name":"primint"}],"output":{"name":"u32"}}],[10,"leading_zeros","","Returns the number of leading zeros in the binary representation\nof `self`.",18,{"inputs":[{"name":"primint"}],"output":{"name":"u32"}}],[10,"trailing_zeros","","Returns the number of trailing zeros in the binary representation\nof `self`.",18,{"inputs":[{"name":"primint"}],"output":{"name":"u32"}}],[10,"rotate_left","","Shifts the bits to the left by a specified amount amount, `n`, wrapping\nthe truncated bits to the end of the resulting integer.",18,{"inputs":[{"name":"primint"},{"name":"u32"}],"output":{"name":"self"}}],[10,"rotate_right","","Shifts the bits to the right by a specified amount amount, `n`, wrapping\nthe truncated bits to the beginning of the resulting integer.",18,{"inputs":[{"name":"primint"},{"name":"u32"}],"output":{"name":"self"}}],[10,"swap_bytes","","Reverses the byte order of the integer.",18,{"inputs":[{"name":"primint"}],"output":{"name":"self"}}],[10,"from_be","","Convert an integer from big endian to the target's endianness.",18,{"inputs":[{"name":"primint"},{"name":"self"}],"output":{"name":"self"}}],[10,"from_le","","Convert an integer from little endian to the target's endianness.",18,{"inputs":[{"name":"primint"},{"name":"self"}],"output":{"name":"self"}}],[10,"to_be","","Convert `self` to big endian from the target's endianness.",18,{"inputs":[{"name":"primint"}],"output":{"name":"self"}}],[10,"to_le","","Convert `self` to little endian from the target's endianness.",18,{"inputs":[{"name":"primint"}],"output":{"name":"self"}}],[10,"pow","","Raises self to the power of `exp`, using exponentiation by squaring.",18,{"inputs":[{"name":"primint"},{"name":"u32"}],"output":{"name":"self"}}],[8,"ToPrimitive","","A generic trait for converting a value to a number.",null,null],[11,"to_isize","","Converts the value of `self` to an `isize`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_i8","","Converts the value of `self` to an `i8`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_i16","","Converts the value of `self` to an `i16`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_i32","","Converts the value of `self` to an `i32`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[10,"to_i64","","Converts the value of `self` to an `i64`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_usize","","Converts the value of `self` to a `usize`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_u8","","Converts the value of `self` to an `u8`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_u16","","Converts the value of `self` to an `u16`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_u32","","Converts the value of `self` to an `u32`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[10,"to_u64","","Converts the value of `self` to an `u64`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_f32","","Converts the value of `self` to an `f32`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[11,"to_f64","","Converts the value of `self` to an `f64`.",19,{"inputs":[{"name":"toprimitive"}],"output":{"name":"option"}}],[8,"FromPrimitive","","A generic trait for converting a number to a value.",null,null],[11,"from_isize","","Convert an `isize` to return an optional value of this type. If the\nvalue cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"isize"}],"output":{"name":"option"}}],[11,"from_i8","","Convert an `i8` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"i8"}],"output":{"name":"option"}}],[11,"from_i16","","Convert an `i16` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"i16"}],"output":{"name":"option"}}],[11,"from_i32","","Convert an `i32` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"i32"}],"output":{"name":"option"}}],[10,"from_i64","","Convert an `i64` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"i64"}],"output":{"name":"option"}}],[11,"from_usize","","Convert a `usize` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"usize"}],"output":{"name":"option"}}],[11,"from_u8","","Convert an `u8` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"u8"}],"output":{"name":"option"}}],[11,"from_u16","","Convert an `u16` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"u16"}],"output":{"name":"option"}}],[11,"from_u32","","Convert an `u32` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"u32"}],"output":{"name":"option"}}],[10,"from_u64","","Convert an `u64` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"u64"}],"output":{"name":"option"}}],[11,"from_f32","","Convert a `f32` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"f32"}],"output":{"name":"option"}}],[11,"from_f64","","Convert a `f64` to return an optional value of this type. If the\ntype cannot be represented by this value, the `None` is returned.",20,{"inputs":[{"name":"fromprimitive"},{"name":"f64"}],"output":{"name":"option"}}],[8,"NumCast","","An interface for casting between machine scalars.",null,null],[10,"from","","Creates a number from another value that can be converted into\na primitive via the `ToPrimitive` trait.",21,{"inputs":[{"name":"numcast"},{"name":"t"}],"output":{"name":"option"}}],[8,"Float","","",null,null],[10,"nan","","Returns the `NaN` value.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"infinity","","Returns the infinite value.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"neg_infinity","","Returns the negative infinite value.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"neg_zero","","Returns `-0.0`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"min_value","","Returns the smallest finite value that this type can represent.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"min_positive_value","","Returns the smallest positive, normalized value that this type can represent.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"max_value","","Returns the largest finite value that this type can represent.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"is_nan","","Returns `true` if this value is `NaN` and false otherwise.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"is_infinite","","Returns `true` if this value is positive infinity or negative infinity and\nfalse otherwise.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"is_finite","","Returns `true` if this number is neither infinite nor `NaN`.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"is_normal","","Returns `true` if the number is neither zero, infinite,\n[subnormal][subnormal], or `NaN`.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"classify","","Returns the floating point category of the number. If only one property\nis going to be tested, it is generally faster to use the specific\npredicate instead.",22,{"inputs":[{"name":"float"}],"output":{"name":"fpcategory"}}],[10,"floor","","Returns the largest integer less than or equal to a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"ceil","","Returns the smallest integer greater than or equal to a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"round","","Returns the nearest integer to a number. Round half-way cases away from\n`0.0`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"trunc","","Return the integer part of a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"fract","","Returns the fractional part of a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"abs","","Computes the absolute value of `self`. Returns `Float::nan()` if the\nnumber is `Float::nan()`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"signum","","Returns a number that represents the sign of `self`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"is_sign_positive","","Returns `true` if `self` is positive, including `+0.0` and\n`Float::infinity()`.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"is_sign_negative","","Returns `true` if `self` is negative, including `-0.0` and\n`Float::neg_infinity()`.",22,{"inputs":[{"name":"float"}],"output":{"name":"bool"}}],[10,"mul_add","","Fused multiply-add. Computes `(self * a) + b` with only one rounding\nerror. This produces a more accurate result with better performance than\na separate multiplication operation followed by an add.",22,{"inputs":[{"name":"float"},{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"recip","","Take the reciprocal (inverse) of a number, `1/x`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"powi","","Raise a number to an integer power.",22,{"inputs":[{"name":"float"},{"name":"i32"}],"output":{"name":"self"}}],[10,"powf","","Raise a number to a floating point power.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"sqrt","","Take the square root of a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"exp","","Returns `e^(self)`, (the exponential function).",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"exp2","","Returns `2^(self)`.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"ln","","Returns the natural logarithm of the number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"log","","Returns the logarithm of the number with respect to an arbitrary base.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"log2","","Returns the base 2 logarithm of the number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"log10","","Returns the base 10 logarithm of the number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"max","","Returns the maximum of the two numbers.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"min","","Returns the minimum of the two numbers.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"abs_sub","","The positive difference of two numbers.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"cbrt","","Take the cubic root of a number.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"hypot","","Calculate the length of the hypotenuse of a right-angle triangle given\nlegs of length `x` and `y`.",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"sin","","Computes the sine of a number (in radians).",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"cos","","Computes the cosine of a number (in radians).",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"tan","","Computes the tangent of a number (in radians).",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"asin","","Computes the arcsine of a number. Return value is in radians in\nthe range [-pi/2, pi/2] or NaN if the number is outside the range\n[-1, 1].",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"acos","","Computes the arccosine of a number. Return value is in radians in\nthe range [0, pi] or NaN if the number is outside the range\n[-1, 1].",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"atan","","Computes the arctangent of a number. Return value is in radians in the\nrange [-pi/2, pi/2];",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"atan2","","Computes the four quadrant arctangent of `self` (`y`) and `other` (`x`).",22,{"inputs":[{"name":"float"},{"name":"self"}],"output":{"name":"self"}}],[10,"sin_cos","","Simultaneously computes the sine and cosine of the number, `x`. Returns\n`(sin(x), cos(x))`.",22,null],[10,"exp_m1","","Returns `e^(self) - 1` in a way that is accurate even if the\nnumber is close to zero.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"ln_1p","","Returns `ln(1+n)` (natural logarithm) more accurately than if\nthe operations were performed separately.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"sinh","","Hyperbolic sine function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"cosh","","Hyperbolic cosine function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"tanh","","Hyperbolic tangent function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"asinh","","Inverse hyperbolic sine function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"acosh","","Inverse hyperbolic cosine function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"atanh","","Inverse hyperbolic tangent function.",22,{"inputs":[{"name":"float"}],"output":{"name":"self"}}],[10,"integer_decode","","Returns the mantissa, base 2 exponent, and sign as integers, respectively.\nThe original number can be recovered by `sign * mantissa * 2 ^ exponent`.\nThe floating point encoding is documented in the [Reference][floating-point].",22,null]],"paths":[[3,"Complex"],[8,"Integer"],[3,"Range"],[3,"RangeInclusive"],[3,"RangeStep"],[3,"RangeStepInclusive"],[3,"ParseFloatError"],[4,"FloatErrorKind"],[8,"Num"],[8,"Zero"],[8,"One"],[8,"Signed"],[8,"Bounded"],[8,"Saturating"],[8,"CheckedAdd"],[8,"CheckedSub"],[8,"CheckedMul"],[8,"CheckedDiv"],[8,"PrimInt"],[8,"ToPrimitive"],[8,"FromPrimitive"],[8,"NumCast"],[8,"Float"]]};
initSearch(searchIndex);