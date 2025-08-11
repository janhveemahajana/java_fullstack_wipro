package com.wipro.rider.controller;

import org.springframework.web.bind.annotation.RequestMapping;

import com.wipro.rider.entity.RideRequest;
import com.wipro.rider.service.RideService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ride")
public class RideController {
	@Autowired
	RideService rideService;
	@PostMapping
    public ResponseEntity<RideRequest> save(@RequestBody RideRequest r) {
        RideRequest saved = rideService.save(r);
        return ResponseEntity.ok(saved);
    }
}
