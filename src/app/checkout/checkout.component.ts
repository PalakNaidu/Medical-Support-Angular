import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProviderService } from '../providers/global-provider.service';
import { Router } from '@angular/router';
import { HelperServiceService } from '../Helperservice/helper-service.service'; 
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  selectedMedicines: any[] = [];
  patientDetails : any;
  selectedMedicinesIds: any[] = [];
  patientDetailsform: any[] = [];
  deliveryType: string = 'delivery';
  patientName: string = '';
  mobile: string = '';
  address: string = 'Cambridge Road, Halasuru';
  city: string = 'Banglore';
  state: string  = 'Karnataka';
  zipcode: string = '';
  autoAssign: boolean = true;
  chemistId: string = 'pFSLzbwQTH8LY23N2IlczQ==';
  latitude: any = 12.970612;
   longitude: any = 77.6382433;
 items:any[] = [];



  constructor(
    private formBuilder: FormBuilder,
    private globalProvider: GlobalProviderService,
    private router: Router,
    private HelperServiceService: HelperServiceService,
    private toaster : ToastrService

) {}

ngOnInit(): void {
  this.selectedMedicines = this.HelperServiceService.getCart();
  this.patientDetails = this.HelperServiceService.getPatientDetails();
  if (this.patientDetails){
    this.items = this.selectedMedicines.map(medicine => ({
      "medicine_id": medicine.medicine_id,
      "quantity": Number(medicine.size)
    }));
  }
  
  console.log('cart medicines---',this.patientDetails)

}

checkout(){
  const requestBody = {
    items : this.items,
    apikey:this.globalProvider.API_KEY,
    delivery_type: this.deliveryType,
    patient_name: this.patientDetails[0]?.firstname, 
    mobile: this.patientDetails[0]?.mobile,
    address: this.address,
    city: this.city,
    state: this.state,
    zipcode: this.patientDetails[0]?.zipcode,
    auto_assign: this.autoAssign,
    chemist_id: this.chemistId,
    latitude: this.latitude,
    longitude: this.longitude
  };

    this.globalProvider
    .httpPost('/orders/place_order',requestBody)
    .then((data: any) => {
        console.log('Order Placed Successfully !!!', data);
        this.router.navigateByUrl('/dashboard');


    })
    .catch((err) => {

        console.log('Submit error', err);
        this.toaster.error('Unable to place order','Error')
    });
  

}



}
