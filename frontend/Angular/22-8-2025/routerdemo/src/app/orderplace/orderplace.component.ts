import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { OrderServiceService } from '../order-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orderplace',
  imports: [FormsModule, CommonModule],
  templateUrl: './orderplace.component.html',
  styleUrl: './orderplace.component.css'
})
export class OrderplaceComponent implements OnInit{
  products: Product[] = [];
  selectedProductId: number | null = null;
  purchaseQty: number = 1;

  errorMsg = '';
  successMsg = '';

  constructor(
    private productService: ProductserviceService,
    private orderService: OrderServiceService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: () => this.errorMsg = 'Failed to load products'
    });
  }

  placeOrder() {
    if (this.selectedProductId == null) {
      this.errorMsg = 'Please select a product';
      this.successMsg = '';
      return;
    }

    const selectedProduct = this.products.find(p => p.id === this.selectedProductId);
    if (!selectedProduct) {
      this.errorMsg = 'Invalid product selected';
      return;
    }

    if (this.purchaseQty > selectedProduct.quantity) {
      this.errorMsg = 'Quantity exceeds available stock';
      this.successMsg = '';
      return;
    }

    this.orderService.placeOrder(this.selectedProductId, this.purchaseQty).subscribe({
      next: (res) => {
        this.successMsg = `Order placed for ${res.productName}, qty: ${res.quantityPurchased}`;
        this.errorMsg = '';
        this.loadProducts(); // refresh stock
      },
      error: () => {
        this.errorMsg = 'Failed to place order';
        this.successMsg = '';
      }
    });
  }

}
