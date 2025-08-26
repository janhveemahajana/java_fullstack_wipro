package com.wipro.orderms.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="orders")
@Data
public class Order {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	@Column(name="order_id")
    String orderId;
	
	@Column(name="user_id")
    String userId;
	
	@Column(name="food_id")
    double foodId;
	
	@Column(name="order_price")
    String torderPrice;
	
}
