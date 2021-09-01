import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './cart/cart.component';
import {Observable,Subject} from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carturl = "http://localhost:3000/cartDetails";
  constructor(private http: HttpClient) { }

  private _refreshCart= new Subject<void>();
  getRefreshValue(){
    return this._refreshCart;
  }

  cartProductsItems(data: any) {
    data.id = uuidv4()
    return this.http.post(this.carturl, data).pipe(
      tap(()=>{
        this._refreshCart.next();
      })
    );
  }

  getCartProducts()
{
  return this.http.get(this.carturl);
}

deleteCartItem(id:number):Observable<any>{
return this.http.delete(`${this.carturl}/${id}`).pipe(
  tap(()=>{
    this._refreshCart.next();
  })
)
}

}

