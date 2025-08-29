package com.wipro.orderms.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.OrderEntity;
import com.wipro.orderms.service.OrderService;

@RestController
@RequestMapping("/order")
public class OrderController {
	@Autowired
	OrderService orderService;

	@GetMapping
	List<OrderEntity> findAll()
	{
		return orderService.findAll();
	}
	
	@GetMapping("/{id}")
	OrderEntity findById(@PathVariable int id)
	{
		return orderService.findById(id);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable int id){
		return orderService.delete(id);
	}
	@PostMapping
	OrderEntity save(@RequestBody OrderEntity order,
			@RequestHeader("Authorization") String authToken,
			@RequestAttribute("userId") String userId)
	
	{
		System.out.println("userId="+userId);
		System.out.println("authHeader="+authToken) ;
		System.out.println(order);
		order.setUserId(Integer.parseInt(userId));
		OrderEntity orderReturn=orderService.save(order,authToken);
		return 	orderReturn;
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> update(@PathVariable int id, @RequestBody OrderEntity order){
		return orderService.update(id, order);
	}
	
	@PostMapping("/pay")
	Payment pay(@RequestBody Payment pay) {
		
		System.out.println(pay);
		orderService.pay(pay);
		return pay;
	}
}