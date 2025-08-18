package com.wipro.empmgmt.service.impl;

import com.wipro.empmgmt.entity.Address;
import com.wipro.empmgmt.repo.AddressRepo;
import com.wipro.empmgmt.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private AddressRepo addressRepo;

    @Override
    public Address saveAddress(Address address) {
        return addressRepo.save(address);
    }

    @Override
    public Address getAddress(Long id) {
        return addressRepo.findById(id).orElse(null);
    }

    @Override
    public List<Address> getAllAddresses() {
        return addressRepo.findAll();
    }
}
