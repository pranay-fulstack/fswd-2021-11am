let products = [
  { name: "Iphone 12 min", price: 5000, color: "grey" },
  { name: "Samsung Galaxy", price: 4000, color: "White" },
  { name: "Nokia 101", price: 3000, color: "Red" },
  { name: "Mi 3", price: 15000, color: "blue" },
];

let x = products.forEach((product) => {
  if (product.color === "grey" || product.color === "Red") return product;
});

console.log(x);
