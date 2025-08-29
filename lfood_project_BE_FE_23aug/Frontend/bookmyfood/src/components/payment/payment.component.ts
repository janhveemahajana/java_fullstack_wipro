import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../service/payment.service';
import { Payment } from '../../interface/payment';

@Component({
  selector: 'app-payment',
  imports: [CurrencyPipe],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {}
  totalPrice: any = '';
  orderId: any = '';
  accountNumber: string = '';
  cvv: number = 0;
  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');
    let price = this.activatedRoute.snapshot.paramMap
      .get('totalPrice')
      ?.toString();
    this.totalPrice = price;
  }

  pay() {
    let payment: Payment = {
      orderId: this.orderId,
      totalOrderPrice: this.totalPrice,
      accountNumber: this.accountNumber,
      cvv: this.cvv,
      modeOfPayment: 'card',
    };
    this.paymentService.save(payment).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['paymentsub']);
    });
  }
}
