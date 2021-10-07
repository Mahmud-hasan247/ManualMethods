// Calculation in 2D array
const arr = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10],
];

const mainArr = [];
let tempArr = [];

for (let i = 0; i < arr[0].length; i++) {
  for (let j = 0; j < arr.length; j++) {
    tempArr.push(arr[j][i]);
  }
  mainArr.push(tempArr);
  tempArr = [];
}

const arrayOfTotal = [];
for (let z = 0; z < mainArr.length; z++) {
  const total = mainArr[z].reduce((pre, cur) => pre + cur, 0);
  arrayOfTotal.push(total);
}

console.log(tempArr); // expected: []
console.log(mainArr); // expected: [ [1, 4, 7], [2, 5, 8], [3, 6, 9], [4, 7, 10] ]
console.log(arrayOfTotal); // expected: [ 12, 15, 18, 21 ]
