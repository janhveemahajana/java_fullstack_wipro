package com.wipro.productmgtsb.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.productmgtsb.entity.Order;
import com.wipro.productmgtsb.entity.Product;
import com.wipro.productmgtsb.repo.OrderRepo;
import com.wipro.productmgtsb.repo.ProductRepo;
import com.wipro.productmgtsb.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
    private ProductRepo productRepo;

    @Autowired
    private OrderRepo orderRepo;

    public Order placeOrder(Integer productId, Integer qty) {
        Product product = productRepo.findById(productId)
            .orElseThrow(() -> new RuntimeException("Product not found"));

        if (product.getQuantity() < qty) {
            throw new RuntimeException("Not enough stock available");
        }

        // reduce quantity
        product.setQuantity(product.getQuantity() - qty);
        productRepo.save(product);

        // create order
        Order order = new Order();
        order.setProduct(product);
        order.setProductName(product.getName());
        order.setQuantityPurchased(qty);
        order.setOrderDate(LocalDateTime.now());

        return orderRepo.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepo.findAll();
    }
}
