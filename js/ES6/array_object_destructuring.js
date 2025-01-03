const person = {
  name: "sabbir",
  age: 24,
  friends: ["Al Amin", "masum", "rakib", "labonno"],
};

let { name, age } = person;

// console.log(name);
// console.log(age);

let info = [45, 78, 10, 100, "Al Amin Miah", "Rolls Royce", "Sabbir", "toyota"];

let [Age, roll, houseNo, money, Name] = info;

console.log(Age);
console.log(roll);
console.log(houseNo);
console.log(money);
console.log(Name);
