import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  private cart:any = [];
  private cartSubject: BehaviorSubject<[]> = new BehaviorSubject<[]>(this.cart);

  constructor() { }
  

  addToCart(medicine:any) {
    this.cart.push(medicine);
    this.cartSubject.next(this.cart);

    console.log('items---',this.cart)
  }

  getCart() {
    return this.cart;
  }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }
}
