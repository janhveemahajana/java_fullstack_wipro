package com.wipro.uber.entity;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "accepted_ride")
@Data

public class AcceptedRide {
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
