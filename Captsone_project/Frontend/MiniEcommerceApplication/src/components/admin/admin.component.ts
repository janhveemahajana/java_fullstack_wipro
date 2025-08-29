import { Component } from '@angular/core';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  products: Product[] = [];
  newProduct: Product = this.resetProduct();
  editingProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.loadProducts();
      this.newProduct = this.resetProduct();
    });
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product }; // copy so original not mutated
  }

  updateProduct() {
    if (this.editingProduct?.id) {
      this.productService
        .updateProduct(this.editingProduct.id, this.editingProduct)
        .subscribe(() => {
          this.loadProducts();
          this.editingProduct = null;
        });
    }
  }

  deleteProduct(id: number | undefined) {
    if (!id) return;
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  cancelEdit() {
    this.editingProduct = null;
  }

  private resetProduct(): Product {
    return {
      prodName: '',
      prodDesc: '',
      prodCat: '',
      make: '',
      availableQty: 0,
      price: 0,
      uom: '',
      prodRating: 0,
      imageURL: '',
      dateOfManufactureName: new Date(),
    };
  }
}
