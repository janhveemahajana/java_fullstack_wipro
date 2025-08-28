import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../../interface/payment';
import { Observable } from 'rxjs';
import { BASE_URL } from './util/appconstant';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {}

  // Save payment
  save(payment: Payment): Observable<Payment> {
    let url: string = BASE_URL + '/payment';
    return this.http.post<Payment>(url, payment);
  }

  // // Get payment by id
  // getPaymentById(id: number): Observable<Payment> {
  //   return this.http.get<Payment>(`${this.baseUrl}/${id}`);
  // }

  // // Get all payments
  // getAllPayments(): Observable<Payment[]> {
  //   return this.http.get<Payment[]>(`${this.baseUrl}`);
  // }
}
