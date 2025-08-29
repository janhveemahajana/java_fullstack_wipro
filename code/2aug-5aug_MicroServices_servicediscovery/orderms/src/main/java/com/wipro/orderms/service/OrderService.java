package com.wipro.orderms.service;


import java.util.List;

import org.springframework.http.ResponseEntity;

import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.OrderEntity;

public interface OrderService {
	List<OrderEntity> findAll();
	OrderEntity findById(int id);
	OrderEntity save(OrderEntity orderEntity,String token);
	ResponseEntity<String> delete(int id);
	ResponseEntity<String> update(int id, OrderEntity orderEntity);
	void pay(Payment payment);
}
