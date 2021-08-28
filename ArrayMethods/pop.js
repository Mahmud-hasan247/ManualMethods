const arr = [1, 2, 3, 4, 5];

function RemoveTheLastElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr.splice(i, 1);
    }
  }
}
RemoveTheLastElement(arr);
console.log(arr);
