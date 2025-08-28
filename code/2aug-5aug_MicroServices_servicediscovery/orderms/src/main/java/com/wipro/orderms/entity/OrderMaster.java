package com.wipro.orderms.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="order_master")
@Data
public class OrderMaster {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	@Column(name="value")
	int value;
	
}