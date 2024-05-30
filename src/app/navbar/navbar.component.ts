import { Component } from '@angular/core';
import { HelperServiceService } from '../Helperservice/helper-service.service';  


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public cartCount = 0;

  constructor(
    private HelperServiceService: HelperServiceService
) {}

ngOnInit(): void {
  this.HelperServiceService.getCartObservable().subscribe(cart => {
    this.cartCount = cart.length;
  });
}



}
