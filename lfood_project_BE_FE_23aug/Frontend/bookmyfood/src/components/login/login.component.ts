import { Component } from '@angular/core';
import { Login } from '../../interface/login';
import { TokenData } from '../../interface/token';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../app/service/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: Login = {
    email: '',
    name: '',
    passWord: '',
  };

  jwttoken: TokenData = {
    token: '',
  };
  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    console.log('email=' + this.login.email);
    console.log('password=' + this.login.passWord);
    this.loginService.login(this.login).subscribe((data) => {
      this.jwttoken = data;

      let tokenvalue = this.jwttoken.token;
      localStorage.setItem('token', tokenvalue);
      this.router.navigate(['/foodlist']);
    });
  }
}
