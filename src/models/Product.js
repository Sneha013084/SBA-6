"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    static displayDetails() {
        throw new Error("Method not implemented.");
    }
    constructor(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description,
            this.category = category,
            this.price = price,
            this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `${this.id} with ${this.title} and ${this.description} with ${this.category} costs $${this.price}.`;
    }
    getPriceWithDiscount(price, discountPercentage) {
        return this.price - discountPercentage;
    }
}
exports.Product = Product;
