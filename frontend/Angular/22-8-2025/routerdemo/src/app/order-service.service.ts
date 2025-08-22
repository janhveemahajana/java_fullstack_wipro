import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class OrderServiceService {
  private apiUrl = 'http://localhost:9000/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(productId: number, qty: number): Observable<Order> {
    return this.http.post<Order>(
      `${this.apiUrl}/place?productId=${productId}&qty=${qty}`,
      {}
    );
  }

  // Get all order history
  getOrderHistory(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/history`);
  }
}
