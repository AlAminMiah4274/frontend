const num1 = [12, 54, 8, 79, 35, 64, 98, 12];
const num2 = [30, 54, 78, 92, 14, 57, 89, 63, 21, 42];

let num3 = [4, 5, 1, 6, 9, 8, 7, 2];

let numbers = [5, 9, 2, 1, 5, 6, 6, ...num2];
console.log("numbers array", numbers);

console.log([...num1, ...num2, ...num3]);
