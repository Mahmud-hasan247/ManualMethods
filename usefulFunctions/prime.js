const isPrime = (number) => {
  let result = true;
  if (number !== 2) {
    for (let u = 2; u < number; u++) {
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
