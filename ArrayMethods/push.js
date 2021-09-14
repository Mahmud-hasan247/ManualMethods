const arr = [1, 2, 3, 4, 5];

function AddElementInLast(arr, newElement) {
  arr[arr.length] = newElement;
  return arr;
}

const result = AddElementInLast(arr, 6);
console.log(result); // expected: [ 1, 2, 3, 4, 5, 6 ]
