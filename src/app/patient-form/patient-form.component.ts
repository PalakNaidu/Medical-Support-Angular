import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalProviderService } from '../providers/global-provider.service';
import { HelperServiceService } from '../Helperservice/helper-service.service';  
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  public patientForm!: FormGroup;


  constructor(private fb: FormBuilder,
    private globalProvider: GlobalProviderService,
    private HelperServiceService: HelperServiceService,
    private toaster: ToastrService,

  ) {
    this.patientForm = this.fb.group({
      apikey : this.globalProvider.API_KEY,
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      age: ['', [Validators.required, Validators.min(0)]],
      zipcode: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      blood_group: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.patientForm.valid) {
      console.log(this.patientForm.value);
      this.globalProvider
      .httpPost('/patients/add',this.patientForm.value)
      .then((data: any) => {
          console.log('Submit Response--', data);
          this.patientForm.reset();
          this.resetFormValidation(this.patientForm);

          this.toaster.success('Patient Added Successfully','Success')
      })
      .catch((err) => {
  
          console.log('Submit error', err);
      });
    }
  }

  resetFormValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      formGroup.get(key)?.setErrors(null);
    });
}
}

