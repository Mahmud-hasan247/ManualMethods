// First Project
function palindrome(str) {
  const plain = str
    .toLowerCase()
    .trim()
    .replace(/\s|\,|\.|_|-|\W/g, "")
    .split("");

  return plain.toString() === plain.reverse().toString();
}

console.log(palindrome("EYE"));

// Second Project
const common = (number, str1, str2, str3) => {
  const roman = [];
  if (number < 4) {
    for (let j = 1; j <= number; j++) {
      roman.push(str1);
    }
  } else if (number === 4) {
    roman.push(str1, str2);
  } else if (number === 5) {
    roman.push(str2);
  } else if (number > 5 && number < 9) {
    roman.push(str2);
    for (let m = 6; m <= number; m++) {
      roman.push(str1);
    }
  } else if (number === 9) {
    roman.push(str1, str3);
  } else if (number === 10) {
    roman.push(str3);
  }
  return roman;
};

const tens = (ten) => {
  const remainFromTens = ten % 10;
  const numberOfTens = (ten - remainFromTens) / 10;
  return [
    common(numberOfTens, "X", "L"),
    common(remainFromTens, "I", "V", "X"),
  ];
};

const Fifties = (fifty) => {
  const remainFromFifties = fifty % 50;
  const numberOfFifties = (fifty - remainFromFifties) / 50;
  return [common(numberOfFifties, "L", "C"), tens(remainFromFifties)];
};

const Hundreds = (hundreds) => {
  const remainFromHundreds = hundreds % 100;
  const numberOfHundreds = (hundreds - remainFromHundreds) / 100;
  return [common(numberOfHundreds, "C", "D", "M"), Fifties(remainFromHundreds)];
};

function convertToRoman(num) {
  const M = [];
  const remainFromThousands = num % 1000;
  const numberOfThousands = (num - remainFromThousands) / 1000;
  M.push([...common(numberOfThousands, "M", "C")]);
  M.push([...Hundreds(remainFromThousands)]);

  return M.flat(Infinity).join("");
}

console.log(convertToRoman(3));
// DCCXCVIII LXXXIX

// with copilot
const romanConverter = (num) => {
  let rom = "";
  const romNum = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  for (let m = 0; m < romNum.length; m++) {
    while (num >= romNum[m][0]) {
      rom += romNum[m][1];
      num -= romNum[m][0];
    }
  }
  return rom;
};

console.log(romanConverter(6));

// Third Project
function rot13(str) {
  const arr = str.split("");
  for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    switch (element) {
      case "A":
        arr[j] = "N";
        break;
      case "B":
        arr[j] = "O";
        break;
      case "C":
        arr[j] = "P";
        break;
      case "D":
        arr[j] = "Q";
        break;
      case "E":
        arr[j] = "R";
        break;
      case "F":
        arr[j] = "S";
        break;
      case "G":
        arr[j] = "T";
        break;
      case "H":
        arr[j] = "U";
        break;
      case "I":
        arr[j] = "V";
        break;
      case "J":
        arr[j] = "W";
        break;
      case "K":
        arr[j] = "X";
        break;
      case "L":
        arr[j] = "Y";
        break;
      case "M":
        arr[j] = "Z";
        break;
      case "N":
        arr[j] = "A";
        break;
      case "O":
        arr[j] = "B";
        break;
      case "P":
        arr[j] = "C";
        break;
      case "Q":
        arr[j] = "D";
        break;
      case "R":
        arr[j] = "E";
        break;
      case "S":
        arr[j] = "F";
        break;
      case "T":
        arr[j] = "G";
        break;
      case "U":
        arr[j] = "H";
        break;
      case "V":
        arr[j] = "I";
        break;
      case "W":
        arr[j] = "J";
        break;
      case "X":
        arr[j] = "K";
        break;
      case "Y":
        arr[j] = "L";
        break;
      case "Z":
        arr[j] = "M";
        break;

      default:
        arr[j] = arr[j];
        break;
    }
  }
  return arr.join("");
}
console.log(rot13("ZNUZHQ UNFNA"));

// Fourth Project
function usTelephoneCheck(str) {
  const re = /^1?\s?(\(\d{3}\)|\d{3})-?\s?\d{3}-?\s?\d{4}$/g;
  return re.test(str);
}

console.log(usTelephoneCheck("(555)-555-5555"));

// Fifth Project

function checkCashRegister(price, cash, cid) {
  const due2 = cash - price;
  console.log(due2);
  const dr = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  const totalBalance = cid.reduce((acc, cur) => {
    acc += cur[1];
    return acc;
  }, 0);

  const changes = [];

  if (due2 === totalBalance) {
    return { status: "CLOSED", change: cid };
  } else if (due2 < totalBalance) {
    const sorted = JSON.parse(JSON.stringify(cid)).reverse();
    let due = cash - price.toPrecision();
    console.log(due);
    for (let e = 0; e < sorted.length; e++) {
      const element = sorted[e][1];
      const coin = dr.find((v) => sorted[e][0] === v[0]);

      if (due > element) {
        changes.push(sorted[e]);
        due -= element;
      } else if (due > coin[1]) {
        const a = due - (due.toPrecision(4) % coin[1]);
        const b = a / coin[1];
        changes.push([coin[0], coin[1] * b.toFixed(2)]);
        due -= coin[1] * b;
      }
    }

    if (due) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changes };
    }
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

const res = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

console.log(res);
