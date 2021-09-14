const arr = [1, 2, 3, 4, 5];

const RemoveTheFirstElement = (arr) => {
  arr.splice(0, 1);
  return arr;
};

const result = RemoveTheFirstElement(arr);
console.log(result);
