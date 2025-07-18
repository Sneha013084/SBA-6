//mport {Product} from "../models/Product";
  
export function calculateDiscount(price:number, discountPercentage:number):number{
          const discount = price *(discountPercentage/100);
          const discountDollarAmount = price - discount;

          return discountDollarAmount;
       }
    



