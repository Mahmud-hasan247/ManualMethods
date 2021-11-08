// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// solution _ 1
function is_array1(value) {
  return Array.isArray(value);
}

// solution _ 2
function is_array2(value) {
  return toString.call(value) === "[object Array]";
}

// solution _ 3
function is_array3(value) {
  return value instanceof Array;
}

console.log(is_array1([])); // expected: true
console.log(is_array2([1, 2, 4, 0])); // expected: true
console.log(is_array3("w3resource")); // expected: false

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]


const arrayClone = [2, 4, [34], 6, 7, [45]]
// solution _ 1
function array_Clone1(arr) {
  return arr.map((item) => item);
}

const cloneResult1 = array_Clone1(arrayClone)
cloneResult1[2][0] = 80
cloneResult1[0] = 80
console.log(cloneResult1)

console.log(arrayClone)

// solution _ 2
function array_Clone2(arr) {
  return arr.filter(() => true);
}

// solution _ 3
function array_Clone3(arr) {
  return arr.reduce((acc, cur) => {
    acc?.push(cur);
    return acc;
  }, []);
}

// solution _ 4 ES6
function array_Clone4(arr) {
  return [...arr];
}

// solution _ 5
function array_Clone5(arr) {
  return arr.slice()
}
// solution _ 6 deep clone
function array_Deep_Clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}


console.log(array_Clone5(arrayClone));
