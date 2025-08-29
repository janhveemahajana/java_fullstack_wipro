package com.wipro.orderms.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.wipro.orderms.dto.Food;
import com.wipro.orderms.dto.Payment;
import com.wipro.orderms.entity.OrderEntity;
import com.wipro.orderms.entity.OrderMaster;
import com.wipro.orderms.repo.OrderMasterRepo;
import com.wipro.orderms.repo.OrderRepo;
import com.wipro.orderms.service.OrderService;
import com.wipro.orderms.util.AppConstant;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	OrderMasterRepo orderMasterRepo;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	KafkaTemplate kafkaTemplate;
	
	
	@Override
	public List<OrderEntity> findAll() {
		 
		return orderRepo.findAll();
	}
	
	public OrderEntity findById(int id) {
		// TODO Auto-generated method stub
		Optional<OrderEntity> orderOpt= orderRepo.findById(id);
		if(orderOpt.isPresent())
		{
			return orderOpt.get();
		}
		return null;
	}

	public OrderEntity save(OrderEntity order,String token) {
	  
		//1. Generate Order Id:
		List<OrderMaster> orderMaster=orderMasterRepo.findAll();
		System.out.println(orderMaster);
		String orderId=null;
		if(orderMaster!=null)
		{	
			OrderMaster orderMasterData =orderMaster.get(orderMaster.size()-1);
			int value=orderMasterData.getValue()+1;
			String strValue=String.format("%04d", value);
		    orderId="ORD-"+strValue;
			System.out.println(orderId);
			orderMasterData.setValue(value);
			orderMasterRepo.save(orderMasterData);
		}
		//2.Create an order object 
//		OrderEntity orderData= new OrderEntity();
		order.setOrderId(orderId);
		order.setOrderStatus("Pending");
		orderRepo.save(order);
		
		//3 make a call to the Movie service
		String url="http://FOOD/foods/"+order.getFoodId();
		System.out.println("url="+url);
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", token);
		HttpEntity<String> entity = new HttpEntity<>(headers);
		ResponseEntity<Food> response = restTemplate.exchange(url, HttpMethod.GET, entity, Food.class);
		Food m=response.getBody();
		System.out.println("ticket Price="+m.getPrice()); 
		order.setTotalOrderPrice(order.getFoodquantity()*m.getPrice());
		orderRepo.save(order);
		return order;
	}


	@Override
	public ResponseEntity<String> delete(int id) {
		// TODO Auto-generated method stub
		
		if(orderRepo.findById(id).isPresent()) {
			orderRepo.deleteById(id);
			return new ResponseEntity<>("Order deleted successfully", HttpStatus.OK);	
		}
		else {
			return new ResponseEntity<>("Order not Found", HttpStatus.NO_CONTENT);
		}
		

	}

	@Override
	public ResponseEntity<String> update(int id, OrderEntity orderEntity) {
		// TODO Auto-generated method stub
		
		OrderEntity extOrder = orderRepo.findById(id).get();
		
		if(extOrder.getId() == orderEntity.getId()) {
//			extOrder.setItems(orderEntity.getItems());
			extOrder.setOrderId(orderEntity.getOrderId());
//			extOrder.setOrderTime(orderEntity.getOrderTime());
			
//			extOrder.setOrderValue(orderEntity.getOrderValue());
			orderRepo.save(extOrder);
			return new ResponseEntity<>("Order updated successfully", HttpStatus.OK);
			
		}
		else {
			return new ResponseEntity<>("Order id not found", HttpStatus.NO_CONTENT);
		}

	}

	@Override
	public void pay(Payment payment) {
		// TODO Auto-generated method stub
		kafkaTemplate.send(AppConstant.OUTGOING_TOPIC_NAME, payment);
		
		
	}

}
