package com.wipro.empmgmt.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name= "dept_name")
    private String deptName;
}
