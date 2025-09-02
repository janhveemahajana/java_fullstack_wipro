import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private cartService: CartService, private router: Router) {}
  cartCount = 0;
  userId = Number(localStorage.getItem('userId'));

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe((count) => {
      console.log('Updated count in header:', count); // debug log
      this.cartCount = count;
    });
    if (this.userId) {
      this.cartService.refreshCartCount(this.userId); // load initial count
    }
  }

  loadCartCount() {
    this.cartService.getCartCount(this.userId).subscribe({
      next: (count) => (this.cartCount = count),
      error: (err) => console.error('Error loading cart count', err),
    });
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
    alert('Logged out successfully!');
  }
}
