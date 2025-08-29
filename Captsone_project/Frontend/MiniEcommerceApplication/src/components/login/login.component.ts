import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Login } from '../../interface/login';
import { TokenData } from '../../interface/token';
import { LoginService } from '../../service/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: Login = {
    emailId: '',
    firstName: '',
    lastName: '',
    passWord: '',
    userId: '',
    phone: 0,
    address: '',
    userType: 1,
    isLoggedIn: false,
  };

  jwttoken: TokenData = {
    token: '',
    role: '',
  };
  constructor(private loginService: LoginService, private router: Router) {}

  onLogin() {
    console.log('email=' + this.login.emailId);
    console.log('password=' + this.login.passWord);
    this.loginService.login(this.login).subscribe((data) => {
      this.jwttoken = data;

      let tokenvalue = this.jwttoken.token;
      let rolevalue = this.jwttoken.role;

      localStorage.setItem('token', tokenvalue);
      localStorage.setItem('role', rolevalue);

      if (rolevalue === 'ADMIN' || this.login.userType === 0) {
        this.router.navigate([`/user/menu/0`]); // Admin menu
      } else if (rolevalue === 'CUSTOMER' || this.login.userType === 1) {
        this.router.navigate([`/user/menu/1`]); // Customer menu
      } else {
        this.router.navigate(['/products']); // fallback
      }
    });
  }
}
