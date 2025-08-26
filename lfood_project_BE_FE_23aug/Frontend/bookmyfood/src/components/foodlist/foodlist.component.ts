import { Component, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { FoodService } from '../../service/food.service';
import { Food } from '../../interface/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodlist',
  imports: [],
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css',
})
export class FoodlistComponent {
  constructor(private foodService: FoodService,private cdr:ChangeDetectorRef,private router:Router) {}

  foods: Food[] = [];

  ngOnInit() {
    let tokendata:any=localStorage.getItem("token");
    if(tokendata==null)
    {
        this.router.navigate(["/login"])
    }

    this.foodService.getAllFoods().subscribe(
      (data) => {
        this.foods = data;
        console.log('Foods fetched successfully:', data);
        console.log(this.foods)
        this.cdr.markForCheck();
      },
      (error) => {
        console.error('Error fetching Product:', error);
      }
    );
  }
}
