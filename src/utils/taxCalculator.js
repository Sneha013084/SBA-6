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
    var taxRate = category === "groceries" ? 3 : 4.75; //ternary operator,if the product belongs to the griceries ,tax will be 3 otherwise its 4.75
    var decimalTaxRate = taxRate / 100;
    var taxDollarAmount = price * decimalTaxRate;
    return taxDollarAmount;
}
