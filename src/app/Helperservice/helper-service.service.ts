import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperServiceService {
  private cart:any = [];
  public patientDetails:any = [];
  private cartSubject: BehaviorSubject<[]> = new BehaviorSubject<[]>(this.cart);

  constructor() { }
  

  addToCart(medicine:any) {
    this.cart.push(medicine);
    this.cartSubject.next(this.cart);

    console.log('items---',this.cart)
  }

  addPatientDetails(patientDetails:any){
    this.patientDetails.push(patientDetails)

  }

  
  getPatientDetails() {
    return this.patientDetails;
  }

  getCart() {
    return this.cart;
  }

  getCartObservable() {
    return this.cartSubject.asObservable();
  }
}
