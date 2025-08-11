package com.wipro.uber.service;

import org.springframework.stereotype.Service;

import com.wipro.uber.dto.Ride;

@Service
public interface UberService {
	void processRide(Ride ride);
}
