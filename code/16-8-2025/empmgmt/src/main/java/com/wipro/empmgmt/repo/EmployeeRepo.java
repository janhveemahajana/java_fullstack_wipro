package com.wipro.empmgmt.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wipro.empmgmt.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    Optional<Employee> findByEmpName(String empName);
}
