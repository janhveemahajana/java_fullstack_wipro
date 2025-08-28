import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { FoodlistComponent } from '../foodlist/foodlist.component';
import { PaymentComponent } from '../payment/payment.component';
import { PaymentsubmissionComponent } from '../paymentsubmission/paymentsubmission.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'foodlist', component: FoodlistComponent },
  
  { path: 'payment/:orderId/:totalPrice', component: PaymentComponent },
  { path: 'paymentsub', component: PaymentsubmissionComponent },
];
RouterModule.forRoot(routes, { enableTracing: true })