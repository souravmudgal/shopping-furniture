
import { Component, OnInit} from '@angular/core';
import { Product } from './cart/cart.component';
import { ProcartService } from './procart.service';
import{CartService} from './cart.service';
export interface cartNumber {
  item:number,
};






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping';
  constructor(private proCart:ProcartService,private cartItems:CartService ){}
cart:Product[]=[];

item !:number;


ngOnInit(){
// this.proCart.receiveProduct().subscribe(data=>{
  
//   // this.cart=data;
  
//   console.log(data);
//   console.log(data.length);
//   this.item = data.length;
// });
this.cartItems.getRefreshValue().subscribe(()=>{
  this.getAllCart();
  })
  this.getAllCart();


  }
      
  private getAllCart(){
    
this.cartItems.getCartProducts().subscribe(data=>{
  this.item=  Object.keys(data).length;
})

}
    }

