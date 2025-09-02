import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { BASE_URL } from '../util/appConstant';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable(); // 👈 expose to components

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  addToCart(
    userId: number,
    productId: number,
    quantity: number
  ): Observable<any> {
    return this.http
      .post(
        `${BASE_URL}/cart/addProd?userId=${userId}&productId=${productId}&quantity=${quantity}`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(
        tap(() => this.refreshCartCount(userId)) // 👈 update after add
      );
  }

  getCart(userId: number): Observable<any> {
    return this.http.get(`${BASE_URL}/cart/${userId}`, {
      headers: this.getHeaders(),
    });
  }

  updateCartItem(
    userId: number,
    productId: number,
    quantity: number
  ): Observable<any> {
    return this.http
      .put(
        `${BASE_URL}/cart/update?userId=${userId}&productId=${productId}&quantity=${quantity}`,
        {},
        { headers: this.getHeaders() }
      )
      .pipe(
        tap(() => this.refreshCartCount(userId)) // 👈 update after update
      );
  }

  removeFromCart(userId: number, productId: number): Observable<any> {
    return this.http
      .delete(`${BASE_URL}/cart/deleteProd/${userId}/${productId}`, {
        headers: this.getHeaders(),
      })
      .pipe(
        tap(() => this.refreshCartCount(userId)) // 👈 update after delete
      );
  }

  getCartCount(userId: number): Observable<number> {
    return this.http.get<number>(`${BASE_URL}/cart/count/${userId}`, {
      headers: this.getHeaders(),
    });
  }

  // 👇 helper method to push new count into BehaviorSubject
  refreshCartCount(userId: number) {
    this.getCartCount(userId).subscribe((count) => {
      console.log('New cart count from backend:', count);
      this.cartCountSubject.next(count);
    });
  }
}
