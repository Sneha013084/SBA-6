
import {customFetchError} from'../utils/errorHandler';

export async function fetchData(){
 try {
const response = await
fetch('https://dummyjson.com/products');
if(!response.ok){
    throw new customFetchError(' ',response.status);
}

 const data = await response.json();
 console.log (" Fetched data", data);
 return data.products;
 
 } catch (error){
  console.error(" Fetch error" , error);
 }
}
  