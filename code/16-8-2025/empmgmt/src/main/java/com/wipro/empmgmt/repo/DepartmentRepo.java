package com.wipro.empmgmt.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.empmgmt.entity.Department;

public interface DepartmentRepo extends JpaRepository<Department, Long>{

}
