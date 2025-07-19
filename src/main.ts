import {Product} from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import {fetchData} from "./services/apiService"
  
interface ProductData{
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
    discountPercentage:number;
}

//create instances for the class


 async function main() {
try{
         const ProductData  =await fetchData();

        //i'm getting an array of products data. For creating a instances of product create function map() 

         const products = ProductData.map((p: { id: number; title: string; description: string; category: number; price: number; discountPercentage: number; }) =>new Product (p.id,p.title,p.description, p.category,p.price,p.discountPercentage))
         products.forEach(() => {
            const tax = products.taxDollarAmount;

            console.log(`${Product.displayDetails()} `,tax);
    
            
         });


}catch(error){
    console.log("Error occured")

}

main();
 }
