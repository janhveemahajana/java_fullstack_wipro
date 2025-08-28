package com.wipro.orderms.service;


import java.util.List;

import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.OrderEntity;

public interface OrderService {
	List<OrderEntity> findAll();
	OrderEntity findById(int id);
	OrderEntity save(OrderEntity orderEntity,String token);
	void deleteById(int id);
	void pay(Payment payment);
}
