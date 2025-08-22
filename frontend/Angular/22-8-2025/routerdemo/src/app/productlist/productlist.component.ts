import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  imports: [RouterLink],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
})
export class ProductlistComponent {
  constructor(
    private productService: ProductserviceService,
    private router: Router
  ) {}

  products: Product[] = [];

  ngOnInit() {
    console.log('==> Productlist Component Initialized');
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log('Products fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching Product:', error);
      }
    );
  }

  addProduct() {
    this.router.navigate(['/productadd']);
    // Logic to navigate to the user add page
  }
}
