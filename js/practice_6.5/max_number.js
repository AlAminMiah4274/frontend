const numbers = [1, 2, 3, 102, 500, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const findMaxNumber = (arr) => {
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }

  return maxNum;
};

console.log(findMaxNumber(numbers));
