import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Login } from '../../interface/login';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: Login = {
    firstName: '',
    lastName: '',
    emailId: '',
    userId: '',
    phone: undefined,
    passWord: '',
    address: '',
    userType: 1,
    isLoggedIn: false,
  };

  constructor(private loginService: LoginService, private router: Router) {}

  onRegister() {
    this.loginService.register(this.user).subscribe(() => {
      alert('Registration successful! Please login.');
      this.router.navigate(['/login']);
    });
  }
}
