const toMultiply = [1, 4, 9, 16];

// pass a function to map
const mapResult = toMultiply.map(x => x * 2);

console.log(mapResult);
// expected output: Array [2, 8, 18, 32]






// Syntax
.
.
.
.
.
.
.
.
// Arrow function
map((currentValue) => { ... } )
map((currentValue, index) => { ... } )
map((currentValue, index, array) => { ... } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(currentValue) { ... })
map(function callbackFn(currentValue, index) { ... })
map(function callbackFn(currentValue, index, array){ ... })
map(function callbackFn(currentValue, index, array) { ... }, thisArg)