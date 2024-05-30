import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProviderService } from '../providers/global-provider.service';
import { Router } from '@angular/router';
import { HelperServiceService } from '../Helperservice/helper-service.service';  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public searchTerm ='';

  public medicines:any = [];
  constructor(
    private formBuilder: FormBuilder,
    private globalProvider: GlobalProviderService,
    private router: Router,
    private HelperServiceService: HelperServiceService
) {}

  ngOnInit(): void {
  }

  onSearch(searchTerm:any): void {
    let obj={
      apikey:'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3',
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
    this.HelperServiceService.addToCart(medicine);
  }


}
