const nums = [
  2, 10, 3, 1, 5, 16, 7, 8, 20, 4, 9, 11, 18, 12, 13, 6, 15, 17, 14, 19,
];

// to keep the original array unsorted
const sortedArr = nums.slice().sort((a, b) => a - b);

// to sort the original array
nums.sort((a, b) => a - b);

// console.log(sortedArr);

// console.log(nums);

// to sort a string array
const stringArr = ["banana", "apple", "orange", "jackfruit"];

// ascending order
stringArr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));

// descending order
stringArr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1));

console.log(stringArr);
