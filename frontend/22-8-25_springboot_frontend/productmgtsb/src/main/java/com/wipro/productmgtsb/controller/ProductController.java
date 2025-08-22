package com.wipro.productmgtsb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.productmgtsb.entity.Product;
import com.wipro.productmgtsb.service.ProductService;


@RestController
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductService productService;
	
	@GetMapping
	List<Product> findAll()
	{
		return productService.findAll();
	}
	@GetMapping("/{id}")
	Product findById(@PathVariable int id)
	{
		return productService.findById(id);
	}
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable int id)
	{
		productService.deleteById(id);
	}
	@PostMapping
	void save(@RequestBody Product product)
	{
		productService.save(product);
	}
	@PutMapping("/{id}")
	void update(@RequestBody Product product)
	{
		productService.save(product);
		
	}
	
	@PutMapping("/{id}/purchase")
    public Product purchaseProduct(@PathVariable int id, @RequestParam int qty) {
        return productService.purchaseProduct(id, qty);
    }
}
