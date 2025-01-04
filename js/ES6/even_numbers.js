const numbers = [45, 12, 20, 51, 78, 90, 11, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i]);
//   }
// }

const evenNums = (numsArr) => {
  const evenArr = [];

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
      evenArr.push(numsArr[i]);
    }
  }

  return evenArr;
};

const oddNums = (numsArr) => {
  const oddArr = [];

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 != 0) {
      oddArr.push(numsArr[i]);
    }
  }

  return oddArr;
};

console.log(evenNums(numbers));
console.log(oddNums(numbers));
