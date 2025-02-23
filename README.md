# JavaScript Function: Unexpected NaN Handling

This repository demonstrates a common, yet subtle, bug in JavaScript functions: the improper handling of NaN (Not a Number) values.

## Bug Description
The `foo` function is intended to add two numbers.  It correctly handles null values, returning 0. However, it fails to explicitly check for NaN values.  When one of the inputs is NaN, the function returns NaN, which is often unexpected behavior.

## Bug Solution
The solution involves adding a check for NaN using `isNaN()` before performing the addition.  This ensures that NaN inputs are handled gracefully, preventing unexpected NaN propagation.