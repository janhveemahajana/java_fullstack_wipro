package com.wipro.empmgmt.service;

import java.util.List;

import com.wipro.empmgmt.entity.Employee;


public interface EmployeeService {
	Employee addEmployee(Employee employee);
    Employee getEmployeeById(Long id);
    Employee getEmployeeByEmpName(String empName);
    Employee updateEmployee(Long id, Employee employee);
    void deleteEmployee(Long id);
    List<Employee> getAllEmployees();
    Employee saveEmployee(Employee employee);
}
