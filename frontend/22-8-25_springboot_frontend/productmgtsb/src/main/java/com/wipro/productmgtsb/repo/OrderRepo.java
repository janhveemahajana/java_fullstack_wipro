package com.wipro.productmgtsb.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.productmgtsb.entity.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

}
