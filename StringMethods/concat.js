const str1 = "mahmud";
const str2 = "hasan";

const AddTwoStr = (string1, string2) => {
  return string1 + string2;
};

const result1 = AddTwoStr(str1, str2);
console.log(result1); // expected output: mahmudhasan

const result2 = AddTwoStr(AddTwoStr(str1, " "), str2);
console.log(result2); // expected output: mahmud hasan
