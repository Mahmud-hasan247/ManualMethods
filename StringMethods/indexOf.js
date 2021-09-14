const str = "mahmud hasan";

const IndexByChar = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
};

const result = IndexByChar(str, "n");
console.log(result); // expected: 11
