import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  imports: [FormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css',
})
export class ProductaddComponent {
  constructor(
    private productService: ProductserviceService,
    private router: Router
  ) {}

  productName: string = '';
  productCategory: string = '';
  productPrice: string = '';
  productQty: number = 0;

  submit() {
    console.log(
      'Adding product:',
      this.productName,
      this.productCategory,
      this.productPrice,
      this.productQty
    );

    this.productService
      .addProduct({
        name: this.productName,
        category: this.productCategory,
        price: this.productPrice,
        quantity: this.productQty
      })
      .subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          this.productName = '';
          this.productCategory = '';
          this.productPrice = '';
          this.productQty = 0;
          this.router.navigate(['/productlist']); // Navigate to the products list after adding  the user
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
  }
}
