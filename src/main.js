"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./models/Product");
const taxCalculator_1 = require("./utils/taxCalculator");
const apiService_1 = require("./services/apiService");
//create instances for the class
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ProductList = yield (0, apiService_1.fetchData)();
            //i'm getting an array of products data. For creating a instances of product create function map()
            const products = ProductList.map((p) => new Product_1.Product(p.id, p.title, p.description, p.category, p.price, p.discountPercentage));
            products.forEach(() => {
                const tax = (0, taxCalculator_1.calculateTax)(products.price, products.category);
                console.log(`${Product_1.Product.displayDetails()} `, tax);
            });
        }
        catch (error) {
            console.log("Error occured");
        }
        main();
    });
}
