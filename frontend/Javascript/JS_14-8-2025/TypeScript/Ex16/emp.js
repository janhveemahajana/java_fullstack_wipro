var employees = [
    { empId: 1, empName: "Janhvee", salary: 50000 },
    { empId: 2, empName: "Anmol", salary: 60000 }
];
function printEmployees(employees) {
    for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
        var emp = employees_1[_i];
        console.log(emp.empId, emp.empName, emp.salary);
    }
    return employees.length;
}
var count = printEmployees(employees);
console.log("Total Employees:", count);
