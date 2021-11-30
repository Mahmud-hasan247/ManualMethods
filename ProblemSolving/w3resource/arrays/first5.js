// <<---------------------------One---------------------------->>
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

// <<---------------------Two-------------------------->>
// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const arrayClone = [2, 4, [34], 6, 7, [45]];
// solution _ 1
function array_Clone1(arr) {
  return arr.map((item) => item);
}

const cloneResult1 = array_Clone1(arrayClone);
// cloneResult1[2][0] = 80;
// cloneResult1[0] = 80;
// console.log(cloneResult1);
// console.log(arrayClone);

// solution _ 2
function array_Clone2(arr) {
  return arr.filter(() => true);
}
console.log(array_Clone2(arrayClone));

// solution _ 3
function array_Clone3(arr) {
  return arr.reduce((acc, cur) => {
    acc?.push(cur);
    return acc;
  }, []);
}
console.log(array_Clone3(arrayClone));

// solution _ 4
function array_Clone4(arr) {
  return [...arr];
}
console.log(array_Clone4(arrayClone));

// solution _ 5
function array_Clone5(arr) {
  return arr.slice();
}
console.log(array_Clone5(arrayClone));

// solution _ 6
function array_Clone6(arr) {
  return arr.slice(0);
}

console.log(array_Clone6(arrayClone));

// solution _ 7
function array_Clone7(arr) {
  return Array.from(arr);
}

console.log(array_Clone7(arrayClone));

// solution _ 8 deep clone
function array_Deep_Clone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

const cloneResultDeep = array_Deep_Clone(arrayClone);
cloneResultDeep[2][0] = 80;
cloneResultDeep[0] = 80;
console.log(cloneResultDeep);
console.log(arrayClone);

// <<--------------------------Three------------------------->>
// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
//
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Solution _ 1

function first1(arr, n) {
  return arr.splice(0, n || 1);
}

// Solution _ 2
function first2(arr, n) {
  const array = [];
  for (let i = 0; i < (n || 1); i++) {
    if (arr[i] || arr[i] === 0) array.push(arr[i]);
  }
  return array;
}

// Solution _ 3
function first3(arr, n) {
  return arr.filter((e, i) => i < n);
}

function first4(arr, n) {
  if (arr == null) {
    return [];
  } else if (n === (null || undefined)) {
    return arr[0];
  } else if (n < 0) {
    return [];
  }

  return arr.slice(0, n);
}

console.log(first4([]));


//<<---------------------------Four------------------------------>>

/* 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2] */

function last1(arr, n) {
  if (arr.length && n) {
    return arr.slice()
  }
} 