package com.wipro.productms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.productms.entity.Product;
import com.wipro.productms.service.ProductService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@RequestMapping("/products")
@Tag(name = "Product Management", description = "APIs for managing products")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@Operation(summary = "Get all products")
    @ApiResponse(responseCode = "200", description = "Products retrieved successfully")
	@GetMapping
	List<Product> findAll()
	{
		return productService.findAll();
	}
	
	@Operation(summary = "Get product by ID")
    @ApiResponse(responseCode = "200", description = "Product found")
    @ApiResponse(responseCode = "404", description = "Product not found")
	@GetMapping("/{id}")
	Product findById(@PathVariable int id)
	{
		return productService.findById(id);
	}
	
	@Operation(summary = "Delete product by ID")
    @ApiResponse(responseCode = "200", description = "Product found")
    @ApiResponse(responseCode = "404", description = "Product not found")
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable int id)
	{
		productService.deleteById(id);
	}
	
	
	@Operation(summary = "Save a new product")
    @ApiResponse(responseCode = "201", description = "Product saved successfully")
	@PostMapping
	Product save(@RequestBody Product product)
	{
		return productService.save(product);
	}
	
	@Operation(summary = "Update product by ID")
    @ApiResponse(responseCode = "200", description = "Product Updated")
    @ApiResponse(responseCode = "404", description = "Product not found")
	@PutMapping("/{id}")
	void update(@RequestBody Product product)
	{
		productService.save(product);
		
	}
	
	@Operation(summary = "Get product by category")
    @ApiResponse(responseCode = "200", description = "Product found")
    @ApiResponse(responseCode = "404", description = "Product not found")
	@GetMapping("/search")
    public ResponseEntity<List<Product>> searchProducts(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        List<Product> products;
        try {
            if (category != null && search != null) {
                products = productService.searchByCategoryAndName(category, search);
            } else if (category != null) {
                products = productService.findByCategory(category);
            } else if (search != null) {
                products = productService.searchByNameOrDescription(search);
            } else {
                products = productService.findAll();
            }
            
            return ResponseEntity.ok(products);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}