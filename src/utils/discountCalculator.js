"use strict";
//mport {Product} from "../models/Product";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(price, discountPercentage) {
    var discount = price * (discountPercentage / 100);
    var discountDollarAmount = price - discount;
    return discountDollarAmount;
}
