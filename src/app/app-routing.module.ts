import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ProductsComponent } from './products/products.component';
import {CartComponent} from './cart/cart.component' ;
import {DoublebedComponent} from './products/doublebed/doublebed.component';
import {FourposterbedComponent} from './products/fourposterbed/fourposterbed.component';
import{SinglebedComponent} from './products/singlebed/singlebed.component'
import{CheckoutComponent} from './checkout/checkout.component'
// import { hostViewClassName } from '@angular/compiler';


const routes: Routes =  [
  {path:"" , component:HomeComponent},
  {path:"home" , component:HomeComponent},

{path:"product" , component:ProductsComponent ,children:[
  { path:"", component:DoublebedComponent},
  { path:"doublebed", component:DoublebedComponent},
  // { path:"fourbed", component:FourposterbedComponent},
  // { path:"single", component:SinglebedComponent}
  ]} ,
 
{path:"cart" , component:CartComponent},
{path:"checkout", component:CheckoutComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
