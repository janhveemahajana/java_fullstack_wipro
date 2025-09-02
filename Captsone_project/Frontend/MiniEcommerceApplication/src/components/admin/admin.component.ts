import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CurrencyPipe, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchCategory: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data; // show all initially
    });
  }

  filterProducts() {
    if (!this.searchCategory) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.prodCat
          .toLowerCase()
          .includes(this.searchCategory.toLowerCase())
      );
    }
  }

  deleteProduct(id: number | undefined) {
    if (!id) return;
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  goToAdd() {
    this.router.navigate(['/admin/add']);
  }

  goToEdit(id: number | undefined) {
    if (id) this.router.navigate(['/admin/edit', id]);
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
