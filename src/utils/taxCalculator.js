"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
function calculateTax(price, category) {
    //  let taxRate;
    //     if(product.category ==="groceries"){
    //     taxRate =3;
    //     }else{
    //       taxRate = 4.75;
    //     }
    const taxRate = category === "groceries" ? 3 : 4.75; //ternary operator
    const decimalTaxRate = taxRate / 100;
    const taxDollarAmount = price * decimalTaxRate;
    return taxDollarAmount;
}
