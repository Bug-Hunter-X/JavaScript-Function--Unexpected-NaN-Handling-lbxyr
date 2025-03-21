function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Simple addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// The bug is that it doesn't handle NaN correctly
console.log(foo(NaN, 5)); // Output: NaN, should be 0 or handle appropriately
console.log(foo(5, NaN)); // Output: NaN, should be 0 or handle appropriately