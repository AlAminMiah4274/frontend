const products = [
  { id: 101, name: "iphone", price: 150000, color: "silver" },
  { id: 102, name: "vivo", price: 25000, color: "blue" },
  { id: 103, name: "samsung", price: 50000, color: "brown" },
  { id: 104, name: "xiaomi", price: 18000, color: "black" },
  { id: 105, name: "symphony", price: 15000, color: "red" },
  { id: 106, name: "nokia", price: 2000, color: "black" },
  { id: 107, name: "sony", price: 75000, color: "pink" },
  { id: 108, name: "google", price: 80000, color: "white" },
];

products.forEach((product) => {
  if (product.price >= 50000) {
    console.log(product.name);
  }
});
