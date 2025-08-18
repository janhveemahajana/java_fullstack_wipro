package com.wipro.empmgmt.service;

import com.wipro.empmgmt.entity.Address;
import java.util.List;

public interface AddressService {
	Address saveAddress(Address address);
    Address getAddress(Long id);
    List<Address> getAllAddresses();
}
