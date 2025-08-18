package com.wipro.empmgmt.entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "emp_name")
    private String empName;
    
    @Column(name= "type")
    private String type; // Contract or Regular

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "department_id")
    private Department department;
}
