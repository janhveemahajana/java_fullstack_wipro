import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../interface/food';
import { BASE_URL } from '../app/service/util/appconstant';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getAllFoods(): Observable<Food[]> {
    let token = localStorage.getItem('token');
    // console.log("jwt token="+token)
    let header: HttpHeaders = new HttpHeaders();

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${token}`)

    let url:string= BASE_URL+"/foods"
      return this.http.get<Food[]>(url,{headers});

  }
}
