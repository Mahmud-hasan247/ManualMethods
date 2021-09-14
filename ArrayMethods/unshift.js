// solution - 1
const arr = [2, 3, 4, 5];

const AddElementInFirst = (arr, newElement) => {
  arr.reverse()[arr.length] = newElement;
  return arr.reverse();
};

const result = AddElementInFirst(arr, 1);
console.log(result); // expected: [ 1, 2, 3, 4, 5 ]

// solution - 2
const LetsUnshift = function (array, item) {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = item;
  return array;
};

const array = [7, 8, 9];
const Result = LetsUnshift(array, 6);
console.log(Result); // expected: [ 6, 7, 8, 9 ]
