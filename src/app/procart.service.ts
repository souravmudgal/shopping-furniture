import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Product } from './cart/cart.component';
import{HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
 

export class ProcartService {
  url="http://localhost:3000/";
  ProFamilyurl="http://localhost:3000/productFamily";
  constructor(private http:HttpClient ) {
    
   }

 
  // public cartProducts = new BehaviorSubject<Array<Product>>([]);

 
  public proKeys = new Subject<string>();
  subjectMessageKey$= this.proKeys.asObservable();

// getProduct(){
//  return this.productArray
// }

// its a way to call subscribe button from here 
//  public products=new BehaviorSubject<any>([]);
  // productsObservable= this.products.asObservable();

sendKey(message:string){
    this.proKeys.next(message);
}



getList(productFamilyKey ?:string)
{

  if(productFamilyKey===null||productFamilyKey===undefined){
    return this.http.get(this.url+"doubleBed");
  }
  else{
    return this.http.get(this.url+productFamilyKey);
  }
  
}



getProductFamily()
{

  return this.http.get(this.ProFamilyurl);
}


  // sendProdut(data:Product){
  //   // this.cartProducts.next(data );
  //   const currentValue=this.cartProducts.value;
  //   const upadatedValue=[...currentValue,data];
  //   this.cartProducts.next(upadatedValue);
   
  // }

  // cartProduct(data:Product){
  //   const currentValue=this.cartProducts.value;
  //   const upadatedValue=[...currentValue,data];
  //   this.cartProducts.next(upadatedValue);
  // }

//   getProId(id:number){
// return this.productId.find(item=>
//   item.id===id);
//   }


  // sendProdut(data:Product,data2:string){
  //   // this.cartProducts.next(data );
  //   const currentValue=this.cartProducts.value;
  //   currentValue.push(data);
  //   const upadatedValue=currentValue;
  //   // const upadatedValue=[...currentValue,data];
  //   this.cartProducts.next(currentValue);
  // }

  // receiveProduct(){
  //   return this.cartProducts.asObservable();  
  // }



  // onDelete(id:number){
  
  //   let item = this.cartProducts.value.find(x=> x.id === id);
  //  console.log(item);
  //   if(item !==undefined){
  //     // let index = ;
  //     const mainCart=this.cartProducts.value;
  //   const newCart= mainCart.splice(mainCart.indexOf(item),1);
  //   // console.log(newCart);
  //   this.cartProducts.next(mainCart);
  //   // console.log(mainCart);
  //   }
  
  // }




//   onDelete(id:number){
//     const cart = this.cartProducts.value;
//     const mainCart=this.cartProducts.value;
//     const newCart= cart.splice(id,1); 
//      this.cartProducts.next(mainCart);
// // console.log(newCart);
//     }
  
}
