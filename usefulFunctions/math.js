const numbers = [5, 3, 43, 73, 11, 4, 63];
// get maximum value from an array
const max = (arr) => {
  return arr.reduce((acc, cur) => (acc > cur ? acc : cur), 0);
};
console.log(max(numbers)); // expected: 73

// get minimum value from an array
const min = (arr) => {
  return arr.reduce((acc, cur) => (acc < cur ? acc : cur));
};
console.log(min(numbers)); // expected: 0

// get sum of all elements from an array
const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
console.log(sum(numbers)); // expected: 202

// check a number is prime or not
const isPrime = (number) => {
  let result = true;
  if (number !== 2) {
    for (let u = 2; u < number / 2; u++) {
      if (number % u === 0) {
        result = false;
        break;
      }
    }
  }
  return number ? result : undefined;
};

console.log(isPrime(44)); // expected: false
console.log(isPrime(43)); // expected: true

// get fibonacci series from a number
const fibonacci = (number) => {
  const series = [1, 1];
  while (series[series.length - 1] < number) {
    series.push(series[series.length - 1] + series[series.length - 2]);
  }
  return series;
};

console.log(fibonacci(10)); // expected: [1, 1, 2, 3, 5, 8, 13]
