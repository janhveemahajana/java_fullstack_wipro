package com.wipro.productmgtsb.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.productmgtsb.entity.Product;
import com.wipro.productmgtsb.repo.ProductRepo;
import com.wipro.productmgtsb.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepo productRepo;
	
	@Override
	public List<Product> findAll() {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}

	@Override
	public Product findById(int id) {
		// TODO Auto-generated method stub
		Optional<Product> productOpt= productRepo.findById(id);
		if(productOpt.isPresent())
		{
			return productOpt.get();
		}
		return null;
	}

	@Override
	public void save(Product product) {
		// TODO Auto-generated method stub
		productRepo.save(product);
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		productRepo.deleteById(id);
	}

	
	public Product purchaseProduct(int id, int qty) {
        Product product = productRepo.findById(id).orElseThrow();

        if (product.getQuantity() < qty) {
            throw new RuntimeException("Not enough stock");
        }

        product.setQuantity(product.getQuantity() - qty);
        return productRepo.save(product);
    }
}
