"use strict";
//mport {Product} from "../models/Product";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    const discount = price * (discountPercentage / 100);
    const discountDollarAmount = price - discount;
    return discountDollarAmount;
}
