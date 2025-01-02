var person = {
  hand: 2,
  eye: 2,
  hair: "Do not know",
  father: {
    name: "John",
    age: 42,
  },
};

console.log(person.father.age);
console.log(person.father["name"]);

console.log(Object.keys(person));
