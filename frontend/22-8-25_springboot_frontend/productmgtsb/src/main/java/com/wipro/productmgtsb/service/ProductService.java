package com.wipro.productmgtsb.service;

import java.util.List;

import com.wipro.productmgtsb.entity.Product;

public interface ProductService {
	List<Product> findAll();
	Product findById(int id);
	void save(Product product);
	void deleteById(int id);
	Product purchaseProduct(int id, int qty);
}
