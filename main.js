"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
//create instances for the class
function main() {
    const product1 = new Product_1.Product(1, 'apple', 'green color', 5, 10, 10);
    const product2 = new Product_1.Product(2, 'orange', 'yellow color', 5, 20, 10);
    const product3 = new Product_1.Product(3, 'grapes', 'black color', 5, 25, 10);
    const product4 = new Product_1.Product(4, 'banana', 'yellowcolor', 5, 30, 10);
    console.log(`${product1.title},${product1.description}, ${product1.category}:$${product1.getPriceWithDiscount}`);
    console.log(`${product2.title},${product2.description}, ${product2.category}:$${product2.getPriceWithDiscount}`);
    console.log(`${product3.title},${product3.description}, ${product3.category}:$${product3.getPriceWithDiscount}`);
    console.log(`${product4.title},${product4.description}, ${product4.category}:$${product4.getPriceWithDiscount}`);
}
main();
