package com.wipro.food.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="food")
@Data
public class Food {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	@Column
	String fdname;
	
	@Column
	String fimage;
	
	@Column
	String category;
	
	@Column
	String price;

}
