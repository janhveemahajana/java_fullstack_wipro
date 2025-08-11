package com.wipro.rider.service;

import org.springframework.stereotype.Service;

import com.wipro.rider.entity.RideRequest;

@Service
public interface RideService {
	RideRequest save(RideRequest r);
}
