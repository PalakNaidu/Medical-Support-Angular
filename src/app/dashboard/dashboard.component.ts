import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProviderService } from '../providers/global-provider.service';
import { Router } from '@angular/router';
import { HelperServiceService } from '../Helperservice/helper-service.service';  
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public searchTerm ='';

  public medicines:any = [];
  public patientId: string = '';
  public patientDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private globalProvider: GlobalProviderService,
    private router: Router,
    private HelperServiceService: HelperServiceService,
    private toaster : ToastrService
) {}

  ngOnInit(): void {
  }

  onSearch(searchTerm:any): void {
    let obj={
      apikey:this.globalProvider.API_KEY,
      searchstring : searchTerm
    }

    let searchstring = searchTerm
    this.globalProvider
    .httpPost('/medicines/search',obj)
    .then((data: any) => {
        console.log('Submit Response--', data);
        this.medicines= data?.result
        console.log('mee',this.medicines)

    })
    .catch((err) => {

        console.log('Submit error', err);
    });
  }
  
  addToCart(medicine:any) {
    if(this.patientId){
    this.HelperServiceService.addToCart(medicine);
    this.toaster.success('Item Added','Success')
    }
    else{
      this.toaster.error('Select Patient','Error')
    }
  }
  
  getPatientDetails() {
    if (this.patientId) {
      let obj={
        apikey:this.globalProvider.API_KEY,
  
        patient_id : this.patientId
      }
  
      this.globalProvider
      .httpPost('/patients/view',obj)
      .then((data: any) => {
          console.log('Submit Response--', data);
          this.patientDetails = data;
          this.HelperServiceService.addPatientDetails(this.patientDetails);

  
      })
      .catch((err) => {
  
          console.log('Submit error', err);
          this.toaster.error('Invalid Patient Id','Error')
      });
    }
    
  }

}
