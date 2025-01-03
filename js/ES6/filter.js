const products = [
  { id: 101, name: "iphone", price: 150000, color: "black" },
  { id: 102, name: "vivo", price: 15000, color: "blue" },
  { id: 103, name: "xiaomi", price: 30000, color: "white" },
  { id: 104, name: "samsung", price: 50000, color: "black" },
  { id: 105, name: "pixel", price: 80000, color: "black" },
  { id: 106, name: "nokia", price: 1500, color: "green" },
  { id: 107, name: "sony", price: 100000, color: "pink" },
];

const result = products.filter((product) => product.color == "black");
console.log(result);
