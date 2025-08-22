package com.wipro.productmgtsb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import com.wipro.productmgtsb.entity.Order;
import com.wipro.productmgtsb.service.OrderService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
	@Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public ResponseEntity<Order> placeOrder(@RequestParam int productId, @RequestParam Integer qty) {
        Order order = orderService.placeOrder(productId, qty);
        return ResponseEntity.ok(order);
    }

    @GetMapping("/history")
    public ResponseEntity<List<Order>> getOrderHistory() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }
}
