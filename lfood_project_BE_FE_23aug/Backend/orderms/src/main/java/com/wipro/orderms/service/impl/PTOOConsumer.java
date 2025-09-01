package com.wipro.orderms.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.OrderEntity;
import com.wipro.orderms.repo.OrderRepo;


@Service
public class PTOOConsumer {
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	KafkaTemplate kafkaTemplate;
	
	@KafkaListener(topics= com.wipro.orderms.util.AppConstant.INCOMING_TOPIC_NAME,groupId="payment_service")
	public void receiveUpiPayment(Payment payment) {
		System.out.println("---Message Received ---"+payment);
		Optional<OrderEntity> optOrder = orderRepo.findById(Integer.parseInt(payment.getOrderId()));
		if(optOrder.isPresent()) {
			OrderEntity order = optOrder.get();
			order.setOrderStatus(payment.getPaymentStatus());
			orderRepo.save(order);
					
		}
		
			
		
		
		
	}
	

}