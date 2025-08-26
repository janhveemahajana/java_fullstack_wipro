package com.wipro.food.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.food.entity.Food;
import com.wipro.food.repo.FoodRepo;
import com.wipro.food.service.FoodService;

@Service
public class FoodServiceImpl implements FoodService{
	@Autowired
	FoodRepo foodRepo;
	
	@Override
	public List<Food> findAll() {
		// TODO Auto-generated method stub
		return foodRepo.findAll();
	}

	@Override
	public Food findById(int id) {
		// TODO Auto-generated method stub
		Optional<Food> foodOpt= foodRepo.findById(id);
		if(foodOpt.isPresent())
		{
			return foodOpt.get();
		}
		return null;
	}

	@Override
	public void save(Food food) {
		// TODO Auto-generated method stub
		foodRepo.save(food);
	}

	@Override
	public void deleteById(int id) {
		// TODO Auto-generated method stub
		foodRepo.deleteById(id);
	}
}
