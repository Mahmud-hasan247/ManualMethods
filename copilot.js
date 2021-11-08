const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rev = numbers.reduce((acc, cur) => {
  return acc.map((e, i) => cur[i] + e);
});

console.log(rev);
