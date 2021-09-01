import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/cart/cart.component';
import{ProcartService} from '../../procart.service';
import{CartService} from '../../cart.service';


@Component({
  selector: 'app-doublebed',
  templateUrl: './doublebed.component.html',
  styleUrls: ['./doublebed.component.css']
})
export class DoublebedComponent implements OnInit {

  constructor(private proCart:ProcartService , private router:Router ,
    private cartItems:CartService) { }

    
  addToCart(category:Product){
// console.log(category);
// this.proCart.sendProdut(category );
this.cartItems.cartProductsItems(category).subscribe(result=>{
  console.log(result);
  

})

// console.log(this.proCart.getProId(category.id)); 
  }

  onCheckout(){
    this.router.navigate(['/checkout']);
  }


  productArray:any=[];
  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);




  this.proCart.getList('doubleBed').subscribe(result=>{
this.productArray=result;
  })

  this.proCart.subjectMessageKey$.subscribe(message=>{
  console.log(message);
  this.proCart.getList(message).subscribe(result=>{
    this.productArray=result;
  });
})


// its is used when subscribe call in ,behaviour subject from service 
// this.proCart.products.subscribe(response=>{
//   console.log(response);
//   this.productArray=response;
// });
// console.log(this.proCart.products.value);
    
  } 

}
