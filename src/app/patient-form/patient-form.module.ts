import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { PatientFormRoutingModule } from './patient-form-routing.module';
import { PatientFormComponent } from './patient-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatList,MatListItem } from '@angular/material/list';
import { MatCard , MatCardTitle, MatCardContent } from '@angular/material/card';




@NgModule({
  declarations: [
    PatientFormComponent
  ],
  imports: [
    CommonModule,
    PatientFormRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatList,
    FormsModule,
    MatListItem,
    MatCard,
    MatCardTitle,
    MatCardContent
  ]
})
export class PatientFormModule { }
