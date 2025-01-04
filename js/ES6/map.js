const products = [
  { id: 101, name: "hp", price: 150000, color: "white" },
  { id: 102, name: "lenevo", price: 50000, color: "silver" },
  { id: 103, name: "dell", price: 80000, color: "black" },
  { id: 104, name: "macbook", price: 250000, color: "blue" },
  { id: 105, name: "samsung", price: 30000, color: "silver" },
  { id: 106, name: "sony", price: 90000, color: "pink" },
  { id: 107, name: "walton", price: 20000, color: "black" },
];

const result = products.map((product) => product.id == 103);
console.log(result);
