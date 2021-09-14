const arr = [1, 2, 3, 4, 5];

const RemoveTheLastElement = (arr) => {
  arr.splice(arr.length - 1);
  return arr;
};

const result = RemoveTheLastElement(arr);
console.log(result); // expected: [ 1, 2, 3, 4, ]
