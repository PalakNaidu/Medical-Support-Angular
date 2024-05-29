import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  public medicines = [
    { name: 'Paracetamol' },
    { name: 'Ibuprofen' },
    { name: 'Amoxicillin' },
    { name: 'Ciprofloxacin' },
    { name: 'Aspirin' },
    { name: 'Cetirizine' }
  ];


}
