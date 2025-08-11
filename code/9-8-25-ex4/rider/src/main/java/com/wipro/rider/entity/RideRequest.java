package com.wipro.rider.entity;

import lombok.Data;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "ride_request")
@Data
public class RideRequest {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

	String riderName;
    String pickup;
    @Column(name = "drop_location")
    String dropLocation;
    String status; 
    LocalDateTime timestamp;
}
