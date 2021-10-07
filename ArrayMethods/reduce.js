const myFunc = (arr, cb, init) => {
  let acc = init,
    start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
};

const nums = [33, 6, 7, 35, 4];

const result = myFunc(nums, (acc, cur) => (acc > cur ? acc : cur), 0);

console.log(result); // expected: 35
