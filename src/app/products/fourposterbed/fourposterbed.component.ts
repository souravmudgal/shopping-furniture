import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/cart/cart.component';
import { ProcartService } from '../../procart.service';

@Component({
  selector: 'app-fourposterbed',
  templateUrl: './fourposterbed.component.html',
  styleUrls: ['./fourposterbed.component.css']
})
export class FourposterbedComponent implements OnInit {

  constructor(private proCart: ProcartService, private router: Router) { }
  productArray = [
    {

      id: 1,
      img: "http://cdn.home-designing.com/wp-content/uploads/2016/12/black-stencil-four-poster-bed-canopy.jpg",
      icon: "fa fa-shopping-cart",
      name: "Product Name",
      subject: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint assumenda voluptas",
      price: 14344,
      button: "Buy Now"
    },


    {
      id: 2,
      img: "https://images.woodenstreet.de/image/cache/data%2Fposter-beds%2Fcitadel-poster-bed-without-storage%2Frevised%2Fwalnut%2Ffront-574x396.jpg",
      icon: "fa fa-shopping-cart",
      name: "Product ",
      subject: "Lorem ipsum dolor",
      price: 908,
      button: "Buy Now"
    },
    {
      id: 3,
      img: "data:image/jpeg;base64,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",
      icon: "fa fa-shopping-cart",
      name: " Name",
      subject: " Sint assumenda voluptas",
      price: 178,
      button: "Buy Now"
    },

    {
      id: 4,
      img: "../../assets/images/chair2.jpg",
      icon: "fa fa-shopping-cart",
      name: " Gourav",
      subject: " love to watch anime",
      price: 14,
      button: "Buy Now"
    }
  ]
  addToCart(category: Product) {
    // console.log(category);
    // this.proCart.sendProdut(category);
  }

  onCheckout() {
    this.router.navigate(['/checkout']);
  }

  ngOnInit(): void {
  }

}
