package com.wipro.empmgmt.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.empmgmt.entity.Department;
import com.wipro.empmgmt.entity.Employee;
import com.wipro.empmgmt.exception.EmployeeNotFoundException;
import com.wipro.empmgmt.repo.DepartmentRepo;
import com.wipro.empmgmt.repo.EmployeeRepo;
import com.wipro.empmgmt.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
    private EmployeeRepo repo;
	
	@Autowired
    private DepartmentRepo departmentRepo;

    
    @Override
    public Employee saveEmployee(Employee employee) {
    	if (employee.getDepartment() != null && employee.getDepartment().getId() != null) {
            Department dept = departmentRepo.findById(employee.getDepartment().getId())
                                            .orElseThrow(() -> new RuntimeException("Department not found"));
            employee.setDepartment(dept); // attach managed entity
        }

        return repo.save(employee);
    }


    @Override
    public Employee addEmployee(Employee employee) {
        return repo.save(employee);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    @Override
    public Employee getEmployeeByEmpName(String empName) {
        return repo.findByEmpName(empName)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Employee existing = getEmployeeById(id);
        existing.setEmpName(employee.getEmpName());
        existing.setType(employee.getType());
        existing.setAddress(employee.getAddress());
        existing.setDepartment(employee.getDepartment());
        return repo.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {
        repo.deleteById(id);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }
}
