 
 
 export class Product {
     static displayDetails(): any {
         throw new Error("Method not implemented.");
     }
    id :number;
    title: string;
    description: string;
    category: number;
    price: number;
    discountPercentage : number;

    constructor( id :number,
    title: string,
    description: string,
    category: number,
    price: number,
    discountPercentage : number){
        this. id = id;
        this.title= title;
        this.description= description,
        this.category = category,
        this.price= price,
        this.discountPercentage= discountPercentage;
    }
       displayDetails(): string{
        return `${this.id} with ${this.title} and ${this.description} with ${this.category} costs $${this.price}.`;

    }
       getPriceWithDiscount(price:number, discountPercentage:number):number{
                 return this.price - discountPercentage;
       }

 }



