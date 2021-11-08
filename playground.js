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

// const result = {};
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

// const reduce = votes.reduce((acc, cur) => {
//   if (acc[cur]) {
//     acc[cur]++;
//   } else {
//     acc[cur] = 1;
//   }
//   return acc;
// }, {});

// const look = (value) => {
//   console.log(value);
// };

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
//     console.log(acc[cur.name]);
//     acc[cur.name].price = [cur.name].price + acc[cur.name].price;
//     acc[cur.name].quantity = [cur.name].quantity + 1;
//   } else {
//     acc[cur.name] = { price: cur.price, quantity: 1 };
//   }
//   return acc;
// }, {});

// console.log(newResult)

// const isPrime = (number) => {
//   if (number !== 2) {
//     for (let u = 2; u <= Math.sqrt(number); u++) {
//       if (number % u === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// const sumPrimes = (num) => {
//   const nums = [];
//   let sum = 0;
//   for (let r = 2; r <= num; r++) {
//     if (isPrime(r)) {
//       nums.push(r);
//       sum += r;
//     }
//   }
//   console.log(nums);
//   return nums.reduce((a, b) => a + b, 0);
// };

// console.log(sumPrimes(977));
// console.log(Math.sqrt(25));

// const smallest = (arr) => {
//   arr = arr.sort();
//   let common = arr[0] * arr[1];

//   console.log(common);
//   for (let d = arr[0]; d <= arr[1]; d++) {
//     if (common % d === 0) {
//       return common;
//     } else {
//       while (common % d === 0) {
//         common++;
//       }
//       // return common;
//     }
//   }
//   // return common;
// };
// console.log(smallest([3, 5]));

// function myFunc() {
//   console.log(gh);
//   // console.log(ri);
//   var gh = 49;
//   let ri = 10;
// }
// console.log(gh);

// {
//   var gh = 43;
// }
// myFunc();

const apiData = [];

const partners = [];
const ar = [];
for (let i = 0; i < apiData.length; i++) {
  const flr = apiData.filter(
    (elem) => elem.businessPartnerId === apiData[i].businessPartnerId
  );
  if (flr.length > 5) {
    ar.push(flr);
  }
}

console.log(ar.length);
const filter = apiData.filter((e) => e.businessPartnerId === 29885);
// const le = filter;
console.log(filter.length);

for (let u = 0; u < apiData.length; u++) {
  if (partners.length < 1) {
    partners.push(apiData[u]);
  } else {
    let isUnique = false;

    for (let n = 0; n < partners.length; n++) {
      if (partners[n]?.businessPartnerId === apiData[u]?.businessPartnerId) {
        isUnique = true;
      }
    }
    if (!isUnique) {
      partners.push(apiData[u]);
    }
  }
}

console.log(partners.length, "sld");

const items = [];
// const itemValues = [];

const partnerValues = [];

// const res = Object.values(apiData.reduce((a, {businessPartnerName}) => {
//   a[businessPartnerName] = a[businessPartnerName] || {businessPartnerName, count: 0, itemName};
//   a[businessPartnerName].count.push(a[itemName]);
//   return a;
// }, Object.create(null)));

// var step1 = apiData.reduce(
//   (
//     result,
//     { businessPartnerId, businessPartnerName, numPrice, itemId, itemName }
//   ) => {
//     result[businessPartnerName] = result[businessPartnerName] || [];
//     result[businessPartnerName].push({ itemName, numPrice });
//     return result;
//   },
//   {}
// );
// var result2 = Object.keys(step1).map((businessPartnerName) => ({
//   businessPartnerName,
//   items: step1[businessPartnerName],
// }));
// console.log(step1)

// console.log(result);
// for (let u = 0; u < apiData.length; u++) {
//   if (items.length < 1) {
//     items.push(apiData[u]);
//   } else {
//     let isAvailable = false;

//     for (let y = 0; y < items.length; y++) {
//       if (items[y].itemId === apiData[u].itemId) {
//         isAvailable = true;
//       }
//     }
//     if (!isAvailable) {
//       items.push(apiData[u]);
//     }
//   }

//   if (partners.length < 1) {
//     partners.push(apiData[u]);
//   } else {
//     let isUnique = false;

//     for (let n = 0; n < partners.length; n++) {
//       if (partners[n]?.businessPartnerId === apiData[u]?.businessPartnerId) {
//         isUnique = true;
//       }
//     }
//     if (!isUnique) {
//       partners.push(apiData[u]);
//     }
//   }
// }
console.log(items.length);
console.log(partners.length);
// console.log(partners.length);
console.log(apiData.length);
// console.log(rows);

// for (let i = 0; i < apiData.length; i++) {
//   if (!itemValues.includes(apiData[i].itemId)) {
//     itemNames.push(apiData[i].itemName);
//     itemValues.push(apiData[i].itemId);
//   }
//   if (!partnerValues.includes(apiData[i].businessPartnerId)) {
//     partnerNames.push(apiData[i].businessPartnerName);
//     partnerValues.push(apiData[i].businessPartnerId);
//   }
// }

// const items = [];
// for (let e = 0; e < itemNames.length; e++) {
//   items.push({
//     [itemNames[e]]: itemValues[e],
//   });
// }

// const partners = [];
// for (let e = 0; e < partnerNames.length; e++) {
//   partners.push({
//     [partnerNames[e]]: partnerValues[e],
//   });
// }
// const asc = [3, 5, 7, 3, 6, 3, 6, 356];
// const ar34 = ["apple", "ball", "cat"];
// ar34.splice(1, 0, "dog", "egg");
// console.log(ar34.toString("  "));
// console.log("");
// console.log(Math.max.apply(null, asc));

// const d = new Date()
// console.log(d.getDate())

// function smallestCommons(arr) {
//   // Setup
//   const [min, max] = arr.sort((a, b) => a - b);
//   const numberDivisors = max - min + 1;
//   console.log(numberDivisors)
//   // Largest possible value for SCM
//   let upperBound = 1;
//   for (let i = min; i <= max; i++) {
//     upperBound *= i;
//   }
//   console.log(upperBound)
//   // Test all multiples of 'max'
//   for (let multiple = max; multiple <= upperBound; multiple += max) {
//     console.log(multiple)
//     // Check if every value in range divides 'multiple'
//     let divisorCount = 0;
//     for (let i = min; i <= max; i++) {
//       // Count divisors
//       if (multiple % i === 0) {
//         divisorCount += 1;
//       }
//     }
//     if (divisorCount === numberDivisors) {
//       return multiple;
//     }
//   }
// }

// console.log(smallestCommons([3, 7]))

// function dropElements(arr, func) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift();
//     }
//   }
//   return arr;
// }

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   })
// );

// function steamrollArray(arr) {
//   let result = []; // In this we`ll save the output;
//   let main = arr,
//     first;
//   while (main.length > 0) {
//     //1. Looping it
//     first = main[0];
//     if (Array.isArray(first)) {
//       Array.prototype.splice.apply(main, [0, 1].concat(first));
//     } else {
//       result.push(first);
//       main.splice(0, 1);
//     }
//   }
//   return result;
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// function binaryAgent(str) {
//   var newBin = str.split(" ");
//   var binCode = [];

//   for (i = 0; i < newBin.length; i++) {
//     binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
//   }

//   return binCode.join("");
// }

// const result44 = binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// );

// console.log(result44);

// function truthCheck(collection, pre) {
//   let result = true;
//   for (let i = 0; i < collection.length; i++) {
//     if (collection[i].hasOwnProperty(pre)) {
//       if (!collection[i][pre]) {
//         result = false;
//         break;
//       }
//     } else {
//       result = false;
//       break;
//     }
//   }
//   return result;
// }

// console.log(
//   truthCheck(
//     [
//       { name: "Pete", onBoat: true },
//       { name: "Repeat", onBoat: true },
//       { name: "FastForward", onBoat: null },
//     ],
//     "onBoat"
//   )
// );



function addTogether(num1, num2) {
  // if (typeof num1 === "number") {
  //   if (num2 && typeof num2 === "number") {
  //     return num2 + num1;
  //   } else if (num2 && typeof num2 !== "number") {
  //     return "undefined2";
  //   } else {
  //     return (num) => {
  //       if (typeof num === "number") {
  //         return num1 + num;
  //       } else {
  //         return "undefined3";
  //       }
  //     };
  //   }
  // } else {
  //   return "undefined1";
  // }
  // const [one, two] = arguments;
  // if (typeof one !== "number") {
  //   return undefined;
  // }
  // if (two === undefined) {
  //   return (two) => addTogether(one, two);
  // }
  // if (typeof two !== "number") {
  //   return undefined;
  // }
  // return one + two;
}

// console.log(addTogether(3)("5"));


let name = "mahmud"

name = 88

console.log(name)

const aee = ['name', 34]
const obj = {
  name: "mahmud",
  age: 23
}

obj.age = "age"
aee.push(34)