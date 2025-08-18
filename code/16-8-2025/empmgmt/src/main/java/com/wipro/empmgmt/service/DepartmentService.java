package com.wipro.empmgmt.service;

import java.util.List;

import com.wipro.empmgmt.entity.Department;

public interface DepartmentService {
	Department saveDepartment(Department department);
    Department getDepartment(Long id);
    List<Department> getAllDepartments();
}
