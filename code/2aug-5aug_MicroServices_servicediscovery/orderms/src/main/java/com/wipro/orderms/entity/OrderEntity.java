package com.wipro.orderms.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="order_details")
@Data
public class OrderEntity {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="order_id")
    String orderId;
	
	@Column(name="user_id")
    int userId;
	
	@Column(name="food_id")
    String foodId;
	
	@Column(name="food_quantity")
	int foodquantity;
	
	@Column(name="order_price")
	double totalOrderPrice;
	
	@Column(name="order_status")
    int orderStatus;
	
}
