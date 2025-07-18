"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
let taxRate = 4.75;
function calculateTax(product) {
    const tax = product.price + (product.price * taxRate);
    return tax;
}
