import { Injectable } from '@angular/core';
import { Login } from '../interface/login';
import { HttpClient } from '@angular/common/http';
import { TokenData } from '../interface/token';
import { Observable } from 'rxjs';
import { BASE_URL } from '../app/service/util/appconstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient){}

  login(login:Login):Observable<TokenData>{


    let url:string= BASE_URL+ "/user/login";
    console.log("url-"+url)
    return this.http.post<any>(url,login);

  }
}
