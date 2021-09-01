import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  // cardProducts =[
  //   {
  //     img:"../../assets/images/product_1.png",
  //     button1:"Add To Cart",
  //     button2:"Buy Now",
  //     title:"WESTIDO",
  //     price:"1500"
  //   },
  //   {
  //     img:"../../assets/images/product_2.png",
  //     button1:"Add To Cart",
  //     button2:"Buy Now",
  //     title:"Mofi",
  //     price:"1500"
  //   },
  //   {
  //     img:"../../assets/images/product_3.png",
  //     button1:"Add To Cart",
  //     button2:"Buy Now",
  //     title:"METSMITH",
  //     price:"1500"
  //   },
  //   {
  //     img:"../../assets/images/product_4.png",
  //     button1:"Add To Cart",
  //     button2:"Buy Now",
  //     title:"WESTIDO",
  //     price:"1500"
  //   }
  // ];

  ngOnInit(): void {

  }
  onProduct(){
    this.router.navigate(['/product']);
  }

}
