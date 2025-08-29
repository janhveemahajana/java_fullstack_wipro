package com.wipro.orderms.dto;

import lombok.Data;

@Data
public class Payment {
    
	int id;
	String orderId;	 	 
	double totalOrderPrice;	
	String paymentStatus;	
	String modeOfPayment; 	
	String accountNumber;
	int cvv;
}
