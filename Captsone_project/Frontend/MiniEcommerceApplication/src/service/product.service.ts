import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';
import { BASE_URL } from '../util/appConstant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    let token = localStorage.getItem('token');
    let header: HttpHeaders = new HttpHeaders();

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${token}`);

    let url: string = BASE_URL + '/products';
    return this.http.get<Product[]>(url, { headers });
  }

  getProductById(id: number): Observable<Product> {
    let url: string = BASE_URL + `/products/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    let url: string = BASE_URL + `/products`;
    return this.http.post<Product>(url, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    let url: string = BASE_URL + `/products/${id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<void> {
    let url: string = BASE_URL + `/products/${id}`;
    return this.http.delete<void>(url);
  }
}
