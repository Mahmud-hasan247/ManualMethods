const str = "mahmud hasan";

const endCheck = (string, char) => {
  const sub = string.slice(string.length - char.length);
  if (sub === char) {
    return true;
  } else {
    return false;
  }
};

const result1 = endCheck(str, "san");
console.log(result1); // expected output: true

const result2 = endCheck(str, "sann");
console.log(result2); // expected output: false
