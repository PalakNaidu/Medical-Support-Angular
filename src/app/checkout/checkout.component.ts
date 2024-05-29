import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  selectedMedicines = [
    { name: 'Medicine A', price: 10, quantity: 2 },
    { name: 'Medicine B', price: 15, quantity: 1 },
    { name: 'Medicine C', price: 20, quantity: 3 }
  ];

}
