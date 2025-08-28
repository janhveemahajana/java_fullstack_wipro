import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Food } from '../../interface/food';
import { Router } from '@angular/router';
import { FoodService } from '../../app/service/food.service';
import { Iorder } from '../../interface/iorder';
import { FormsModule } from '@angular/forms';

import { OrderserviceService } from '../../app/service/orderservice.service';

@Component({
  selector: 'app-foodlist',
  imports: [FormsModule],
  templateUrl: './foodlist.component.html',
  styleUrl: './foodlist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodlistComponent {
  foodList: Food[] = [];
  foodquantity: number = 1;
  foodMap: Map<number, number> = new Map();

  constructor(
    private foodService: FoodService,
    private orderService: OrderserviceService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    let tokendata: any = localStorage.getItem('token');
    // if (tokendata == null) {
    //   this.router.navigate(['/login']);
    // }

    this.foodService.getAllFoods().subscribe(
      (data) => {
        this.foodList = data;
        this.foodList.map((d) => {
          this.foodMap.set(d.id!, 0);
          console.log(this.foodMap.get(d.id!));
        });
        console.log(this.foodList);
        this.cdr.markForCheck();
      },
      (error) => {
        console.error('Error fetching Product:', error);
      }
    );
  }

  async save(foodId: number) {
    let order: Iorder = {
      foodId: 0,
      foodquantity: 0,
    };
    let orderData: Iorder = {
      foodId: foodId,
      foodquantity: this.foodquantity,
    };

    await this.orderService.save(orderData).subscribe((result: Iorder) => {
      order = result;

      console.log('result=' + result.id);

      this.router.navigate([
        '/payment/' + result.id + '/' + result.totalOrderPrice,
      ]);
    });
  }

  changeFoodquantity(foodId: number) {
    console.log('foodId=' + foodId + '-' + this.foodquantity);
    this.foodMap.set(foodId, this.foodquantity);

    console.log('after foodquantity=' + this.foodMap.get(foodId));
  }
}
