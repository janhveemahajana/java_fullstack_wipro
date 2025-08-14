interface Employee {
    empId: number;
    empName: string;
    salary: number;
}

let employees: Employee[] = [
  { empId: 1, empName: "Janhvee", salary: 50000 },
  { empId: 2, empName: "Anmol", salary: 60000 }
];

function printEmployees(employees: Employee[]): number {
  for (let emp of employees) {
    console.log(emp.empId, emp.empName, emp.salary);
  }
  return employees.length;
}

let count = printEmployees(employees);
console.log("Total Employees:", count);