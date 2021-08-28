const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

function JoinArray(array1, array2) {
  const newArray = array1;
  for (let i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }
  return newArray;
}

const resultOfManualMethod = JoinArray(arr1, arr2); // This method created by me
const resultOfAutoMethod = arr1.concat(arr2); // This method is javascript's own method
console.log(resultOfManualMethod);
console.log(resultOfManualMethod);

// You can join more than two arrays by this function, like this...
const MoreThanTwoArrays = JoinArray(JoinArray(arr1, arr2), arr3);
console.log(MoreThanTwoArrays);
