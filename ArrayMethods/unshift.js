const arr = [2, 3, 4, 5];

const AddElementInFirst = (arr, newElement) => {
  arr.reverse()[arr.length] = newElement;
  return arr.reverse();
};

const result = AddElementInFirst(arr, 1);
console.log(result); // expected: [ 1, 2, 3, 4, 5 ]
