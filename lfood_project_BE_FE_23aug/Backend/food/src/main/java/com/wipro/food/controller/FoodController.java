package com.wipro.food.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wipro.food.entity.Food;
import com.wipro.food.service.FoodService;

@RestController
@RequestMapping("/foods")
public class FoodController {
	
	@Autowired
	FoodService foodService;
	
	@GetMapping
	List<Food> findAll()
	{
		return foodService.findAll();
	}
	@GetMapping("/{id}")
	Food findById(@PathVariable int id)
	{
		return foodService.findById(id);
	}
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable int id)
	{
		foodService.deleteById(id);
	}
	@PostMapping
	void save(@RequestBody Food food)
	{
		foodService.save(food);
	}
	@PutMapping("/{id}")
	void update(@RequestBody Food food)
	{
		foodService.save(food);
		
	}
}
