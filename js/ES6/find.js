const products = [
  { id: 101, name: "iphone", price: 150000 },
  { id: 102, name: "vivo", price: 30000 },
  { id: 103, name: "samsung", price: 50000 },
  { id: 104, name: "xiaomi", price: 70000 },
  { id: 105, name: "google", price: 100000 },
];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].name == "iphone") {
//     console.log(products[i]);
//   }
// }

const result = products.find((product) => product.id == 102);
console.log(result);
