import { Component, OnInit } from '@angular/core';
import { Product } from '../cart/cart.component';
import { LoaderService } from '../loading/loader.service';
import {ProcartService} from '../procart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  

  constructor(private proCart:ProcartService , private loader:LoaderService) { }

  loading$= this.loader.loading$;
  
productFamilyArray:Product[]|any =[];

  ngOnInit(): void {
  this.proCart.getProductFamily().subscribe((family)=>{
    this.productFamilyArray=family;
    
  })

  }

  onFamilyClick(proId:any){
   this.proCart.sendKey(proId.key);
  }
}

