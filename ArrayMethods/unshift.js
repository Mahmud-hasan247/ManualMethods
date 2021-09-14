const arr = [2, 3, 4, 5];

const AddElementInFirst = (arr, newElement) => {
  for (let i = 0; i < 1; i++) {
    arr[i + 1] = arr[i];
    arr[0] = newElement;
  }
  return arr;
};

const result = AddElementInFirst(arr, 1);
console.log(result);
