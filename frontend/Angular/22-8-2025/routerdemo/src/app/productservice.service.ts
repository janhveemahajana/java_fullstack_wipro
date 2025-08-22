import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    let url: string = 'http://localhost:9000/products';
    return this.http.get<Product[]>(url);
  }

  addProduct(product: Product): Observable<Product> {
    let url: string = 'http://localhost:9000/products';
    return this.http.post<Product>(url, product);
  }
  deleteProduct(id: string): Observable<void> {
    let url: string = `http://localhost:9000/products/${id}`;
    return this.http.delete<void>(url);
  }

  findProduct(id: string): Observable<Product> {
    let url: string = `http://localhost:9000/products/${id}`;
    return this.http.get<Product>(url);
  }

  saveProduct(products: Product): Observable<Product> {
    let url: string = `http://localhost:9000/products/${products.id}`;
    return this.http.put<Product>(url, products);
  }

  placeOrder(productId: number, quantity: number): Observable<Order> {
    let url = `http://localhost:9000/products/${productId}/purchase?qty=${quantity}`;
    return this.http.put<Order>(url, {}); // backend reduces qty
  }

  getOrderHistory(): Observable<Order[]> {
    return this.http.get<Order[]>(`http://localhost:9000/products/history`);
  }
}
