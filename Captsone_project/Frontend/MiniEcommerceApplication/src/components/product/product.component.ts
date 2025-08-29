import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [];
  searchText: string = '';
  searchCategory: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  search() {
    // For now, just frontend filter (can later call backend with params)
    if (this.searchText || this.searchCategory) {
      this.products = this.products.filter(
        (p) =>
          (this.searchText
            ? p.prodName.toLowerCase().includes(this.searchText.toLowerCase())
            : true) &&
          (this.searchCategory
            ? p.prodCat
                .toLowerCase()
                .includes(this.searchCategory.toLowerCase())
            : true)
      );
    } else {
      this.loadProducts(); // reset
    }
  }
}
