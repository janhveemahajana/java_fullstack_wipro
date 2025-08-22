package com.wipro.productmgtsb.service;

import java.util.List;

import com.wipro.productmgtsb.entity.Order;

public interface OrderService {
	Order placeOrder(Integer productId, Integer qty);
	List<Order> getAllOrders();
}
