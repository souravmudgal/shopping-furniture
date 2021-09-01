import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router' ;
export interface Product{
  id:number,
  img:string,
  icon:string,
  name:string,
  subject:string,
  price:number,
  button:string

}
import{ProcartService} from '../procart.service';
import{CartService} from '../cart.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private proCart:ProcartService, private router:Router,private cartItems:CartService) {
  
   }
    prodcutComponent:any=[];

  ngOnInit(): void {
    // this.proCart.receiveProduct().subscribe(data=>{
    //   console.log(data);
// this.prodcutComponent=data;


this.cartItems.getRefreshValue().subscribe(()=>{
this.getAllCart();
})
this.getAllCart();
  }
private getAllCart(){
  this.cartItems.getCartProducts().subscribe(response=>{
    this.prodcutComponent=response;
   
  })

}
 


//   deleteData(cart:Product){
//      this.prodcutComponent.splice(this.prodcutComponent.indexOf(cart),1);
// // this.prodcutComponent=[...this.prodcutComponent];
//   }



  deleteData(id:number){

// this.proCart.onDelete(id);

this.cartItems.deleteCartItem(id).subscribe(result=>{
  console.log(result);

})
  }

  // button used for transfer to the chekout page
  onCheckout(){
this.router.navigate(['/checkout']);
  }


}



