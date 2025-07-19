"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, title, description, category, price, discountPercentage) {
        this.id = id;
        this.title = title;
        this.description = description,
            this.category = category,
            this.price = price,
            this.discountPercentage = discountPercentage;
    }
    Product.displayDetails = function () {
        throw new Error("Method not implemented.");
    };
    Product.prototype.displayDetails = function () {
        return "".concat(this.id, " with ").concat(this.title, " and ").concat(this.description, " with ").concat(this.category, " costs $").concat(this.price, ".");
    };
    Product.prototype.getPriceWithDiscount = function (price, discountPercentage) {
        return this.price - discountPercentage;
    };
    return Product;
}());
exports.Product = Product;
