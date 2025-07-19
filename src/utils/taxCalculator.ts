 
 
   
 export function calculateTax(price:number, category:string): number{
    //  let taxRate;
//     if(product.category ==="groceries"){ 
//     taxRate =3;
//     }else{
//       taxRate = 4.75;
//     }
 const taxRate = category==="groceries" ? 3 : 4.75; //ternary operator,if the product belongs to the griceries ,tax will be 3 otherwise its 4.75
    const decimalTaxRate =taxRate/100;
    const taxDollarAmount = price *decimalTaxRate
    return taxDollarAmount;
}