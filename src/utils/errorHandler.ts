 export class customFetchError extends Error{
    status :number;


// construter with passing arguments
    constructor( message:string, status:number){
        // passing just one argument for super error class

       super(message);
        this.status = status;
        
  //setting error name
       this.name = 'FetchError';
       }

}