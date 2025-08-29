import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iorder } from '../interface/iorder';
import { BASE_URL } from '../util/appconstant';
import { Payment } from '../interface/payment';

@Injectable({
  providedIn: 'root',
})
export class OrderserviceService {
  constructor(private http: HttpClient) {}

  save(order: Iorder): Observable<Iorder> {
    console.log('--save--');

    let token = localStorage.getItem('token');

    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${token}`);
    let url: string = BASE_URL + '/order';
    return this.http.post<Iorder>(url, order, { headers });
  }

  getOrders(): Observable<Iorder[]> {
    return this.http.get<Iorder[]>(BASE_URL + '/order');
  }

  pay(payment: Payment): Observable<Payment> {
    let token = localStorage.getItem('tokenValue');
    let header: HttpHeaders = new HttpHeaders();
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${token}`);
    let url: string = BASE_URL + '/order/pay';
    return this.http.post<Payment>(url, payment, { headers });
  }
}
