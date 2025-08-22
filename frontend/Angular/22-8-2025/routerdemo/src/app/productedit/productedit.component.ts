import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-productedit',
  imports: [FormsModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductserviceService,
    private router:Router

  ) {}
  id:string | null = null;
  product:Product = {

    name: '',
    category: '',
    price: '',
    quantity: 0
  };
  ngOnInit()
  {
      console.log("==> Productedit Component Initialized");
      // Get the product ID from the route parameters
     this.id = this.activatedRoute.snapshot.paramMap.get('id');
      if (this.id) {
        this.productService.findProduct(this.id).subscribe(product => {
          // Handle the product data here, e.g., populate a form
          console.log(product);
          this.product = product;
        });
      }
    }
     save()
     {
      this.productService.saveProduct(this.product).subscribe({
        next: (product) => {
          console.log('product saved successfully:', product);
          this.router.navigate(['/productlist']); // Navigate to the products list after saving

        },
        error: (error) => {
          console.error('Error saving product:', error);
          // Handle the error, e.g., show an error message
        }
     });
    }
}
