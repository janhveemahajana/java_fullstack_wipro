import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { Observable } from 'rxjs';
import { TokenData } from '../interface/token';
import { BASE_URL } from '../util/appConstant';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(login: Login): Observable<TokenData> {
    let url: string = BASE_URL + '/user/login';
    console.log('url-' + url);
    return this.http.post<any>(url, login);
  }

  register(user: Login): Observable<any> {
  let url: string = BASE_URL + '/user';
  console.log('url-' + url);
  return this.http.post<any>(url, user);
}

}