import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentsubmission',
  imports: [],
  templateUrl: './paymentsubmission.component.html',
  styleUrl: './paymentsubmission.component.css'
})
export class PaymentsubmissionComponent {
  constructor(private router: Router){}

  backFoodList(){
    this.router.navigate(['/foodlist'])
  }
}
