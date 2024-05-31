import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProviderService } from '../providers/global-provider.service';
import { Router } from '@angular/router';
import { HelperServiceService } from '../Helperservice/helper-service.service';  


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  selectedMedicines: any[] = [];
  patientDetails : any;


  constructor(
    private formBuilder: FormBuilder,
    private globalProvider: GlobalProviderService,
    private router: Router,
    private HelperServiceService: HelperServiceService
) {}

ngOnInit(): void {
  this.selectedMedicines = this.HelperServiceService.getCart();
  this.patientDetails = this.HelperServiceService.getPatientDetails();
  
  console.log('cart medicines---',this.selectedMedicines,this.patientDetails)

}



}
