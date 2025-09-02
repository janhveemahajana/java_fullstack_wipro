package com.wipro.userms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.userms.dto.Token;
import com.wipro.userms.entity.User;
import com.wipro.userms.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/user")
@Tag(name = "User Management", description = "APIs for managing users")
public class UserController {
	@Autowired
	UserService userServie;
	
	@Operation(summary = "Get all users")
    @ApiResponse(responseCode = "200", description = "Users retrieved successfully")
	@GetMapping
	List<User> findAll()
	{
		System.out.println("user-findAll--");
		return userServie.findAll();
	}
	
	@Operation(summary = "Get user by ID")
    @ApiResponse(responseCode = "200", description = "User found")
    @ApiResponse(responseCode = "404", description = "User not found")
	@GetMapping("/{id}")
	User findById(@PathVariable int id)
	{
		return userServie.findById(id);
	}
	
	@Operation(summary = "Delete user by ID")
    @ApiResponse(responseCode = "200", description = "User deleted successfully")
	@DeleteMapping("/{id}")
	void deleteById(@PathVariable int id)
	{
		 userServie.deleteById(id);
	}
	
	@Operation(summary = "Save new user")
    @ApiResponse(responseCode = "201", description = "User saved successfully")
	@PostMapping
	void save(@RequestBody User user)
	{
		userServie.save(user);
	}
	
	@Operation(summary = "Update existing user")
    @ApiResponse(responseCode = "200", description = "User updated successfully")
	@PutMapping
	void update(@RequestBody User user)
	{
		userServie.save(user);
	}
	
	@Operation(summary = "User login")
    @ApiResponse(responseCode = "200", description = "Login successful, token returned")
    @ApiResponse(responseCode = "401", description = "Invalid credentials")
	@PostMapping("/login")
	Token login(@RequestBody User user)
	{
		return userServie.login(user);
	}

}