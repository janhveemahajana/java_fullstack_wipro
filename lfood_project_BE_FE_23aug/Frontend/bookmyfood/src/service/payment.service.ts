import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../interface/payment';
import { Observable } from 'rxjs';
import { BASE_URL } from '../util/appconstant';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  save(payment: Payment): Observable<Payment> {
    let token = localStorage.getItem('token');

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${token}`);

    console.log('Token from localStorage:', token);
    console.log('Headers:', headers);

    let url: string = BASE_URL + '/payment';
    return this.http.post<Payment>(url, payment, { headers });
  }
}
