// const myArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const mainArr = [];
// let tempArr = [];

// for (let i = 0; i < myArr[0].length; i++) {
//   for (let j = 0; j < myArr.length; j++) {
//     const element = myArr[j][i];
//     tempArr.push(element);
//   }
//   mainArr.push(tempArr);
//   tempArr = [];
// }

// const arrOfTotal = [];

// for (let a = 0; a < mainArr.length; a++) {
//   const total = mainArr[a].reduce((pre, cur) => {
//     return pre + cur;
//   }, 0);
//   arrOfTotal.push(total);
// }

// console.log(mainArr);
// console.log(arrOfTotal);

// ///////////////////////////////
// function whatIsInAName(collection, source) {
//   var arr = [];
//   // Only change code below this line
//   const key = Object.keys(source);
//   const value = Object.values(source).sort();

//   for (let i = 0; i < collection.length; i++) {
//     const keys = Object.keys(collection[i]).filter((e) => key.includes(e));
//     const values = Object.values(collection[i])
//       .filter((e) => value.includes(e))
//       .sort()
//       .slice(0, value.length);

//     if (
//       JSON.stringify(key) === JSON.stringify(keys) &&
//       JSON.stringify(value) === JSON.stringify(values)
//     ) {
//       arr.push(collection[i]);
//     }
//   }

//   // Only change code above this line
//   return arr;
// }

// const result = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });

// console.log(result);

// //////////////////////////////////////
// function spinalCase(str) {
//   const ss = str
//   // str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//   // console.log(str)
//   for (let u = 0; u < ss.length; u++) {

//     if (/[A-Z]/.test(ss[u])) {
//       console.log(ss[u])
//       ss[u] = "mmm"
//     }
//   }
//   console.log(ss)
//   const string = str.split(/\s|_/g);

//   return string.join("-").toLowerCase();
// }

// console.log(spinalCase("ThisIsSpinalTap"));

// ///////////////////////////////////
// function translatePigLatin(str) {
//   const reg = /^[aeiou]/g;
//   if (reg.test(str)) {
//     return str + "way";
//   } else {
//     if (/[aeiou]/g.test(str)) {
//       for (let i = 0; i < str.length; i++) {
//         if (reg.test(str[i])) {
//           const firstPart = str.substr(0, i);
//           return str.replace(firstPart, "").concat(firstPart).concat("ay");
//         }
//       }
//     } else {
//       return str + "ay";
//     }
//   }
// }

// console.log(translatePigLatin("rhythm"));

// function myReplace(str, before, after) {
//   after =
//     before.charAt(0) === before.charAt(0).toUpperCase()
//       ? after[0].toUpperCase() + after.substr(1)
//       : after.toLowerCase();
//   str = str.replace(before, after);
//   return str;
// }

// console.log(
//   myReplace("Let us get back to more Coding", "Coding", "algorithms")
// );

// function fearNotLetter(str) {
//   const letters = "abcdefghijklmnopqrstuvwxyz";
//   const str2 = str.split("");
//   const firstI = letters.indexOf(str[0]);
//   const lastI = letters.indexOf(str[str.length - 1]);
//   const word = letters.slice(firstI, lastI + 1).split("");
//   const filter = word.filter((e) => !str2.includes(e));

//   return filter.length ? filter[0] : undefined;
// }

// console.log(fearNotLetter("twx"));

// function uniteUnique() {
//   const ar = [];
//   for (let k = 0; k < arguments.length; k++) {
//     for (let l = 0; l < arguments[k].length; l++) {
//       const element = arguments[k][l];
//       if (ar.indexOf(element) === -1) {
//         ar.push(element);
//       }
//     }
//   }
//   return ar;
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

const result = {};
const votes = [
  "java",
  "java",
  "python",
  "javaScript",
  "java",
  "javaScript",
  "python",
  "python",
  "java",
  "java",
];

const reduce = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

const look = (value) => {
  console.log(value);
};

const numbers = [3, 6, 4, 6, 4, 5];

// look(max(numbers));

// look(reduce);

const products = [
  { name: "java", price: 100 },
  { name: "javaScript", price: 200 },
  // { name: "python", price: 300 },
  // { name: "java", price: 100 },
  { name: "javaScript", price: 200 },
  // { name: "python", price: 300 },
  // { name: "java", price: 100 },
  // { name: "javaScript", price: 200 },
  { name: "JavaScript", price: 500 },
  // { name: "java", price: 100 },
  // { name: "javaScript", price: 200 },
  // { name: "python", price: 300 },
];

// const newResult = products.reduce((acc, cur) => {
//   if (acc[cur.name]) {
//     console.log(acc[cur.name])
//     acc[cur.name].price = [cur.name].price + acc[cur.name].price;
//     acc[cur.name].quantity = [cur.name].quantity + 1;
//   } else {
//     acc[cur.name] = { price: cur.price, quantity: 1 };
//   }
//   return acc;
// }, {});

// console.log(newResult)

const isPrime = (number) => {
  if (number !== 2) {
    for (let u = 2; u <= Math.sqrt(number); u++) {
      if (number % u === 0) {
        return false;
      }
    }
  }
  return true;
};

const sumPrimes = (num) => {
  const nums = [];
  let sum = 0;
  for (let r = 2; r <= num; r++) {
    if (isPrime(r)) {
      nums.push(r);
      sum += r;
    }
  }
  console.log(nums);
  return nums.reduce((a, b) => a + b, 0);
};

console.log(sumPrimes(977));
console.log(Math.sqrt(25));

const smallest = (arr) => {
  arr = arr.sort()
  for (let d = arr[0]; d <= arr[1]; d++) {
    console.log(d)
    if (arr[0] % d === 0) {
      console.log("y")
      if (arr[1] % d === 0) {
        console.log("yes")
      }
    }
      
      
    
  }
  console.log(arr)
}
smallest([3,4])