package com.wipro.empmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.empmgmt.entity.Address;

public interface AddressRepo extends JpaRepository<Address, Long>{

}
