import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent {
  public patientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.patientForm.invalid) {
      return;
    }
    // const patient: Patient = {
    //   name: this.patientForm.value.name,
    //   age: this.patientForm.value.age
    // };
    // Use patient for placing order
  }
}


