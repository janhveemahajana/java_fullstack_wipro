import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderServiceService } from '../order-service.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-orderhistory',
  imports: [DatePipe, CommonModule],
  templateUrl: './orderhistory.component.html',
  styleUrl: './orderhistory.component.css',
})
export class OrderhistoryComponent implements OnInit {
  orderHistory: Order[] = [];
  errorMsg = '';

  constructor(private orderService: OrderServiceService) {}

  ngOnInit(): void {
    this.loadOrderHistory();
  }

  loadOrderHistory() {
    this.orderService.getOrderHistory().subscribe({
      next: (data) => {
        this.orderHistory = data.map((order) => {
          if (Array.isArray(order.orderDate)) {
            const [year, month, day, hour, minute, second] = order.orderDate;
            return {
              ...order,
              orderDate: new Date(year, month - 1, day, hour, minute, second),
            };
          } else {
            return {
              ...order,
              orderDate: new Date(order.orderDate), // fallback if backend later sends ISO string
            };
          }
        });
      },
      error: () => (this.errorMsg = 'Failed to load order history'),
    });
  }
}
