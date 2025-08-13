// Ex8: Create a list of employees having name, role(“Manager”,”QA,”Developer”) ,empId and salary.  Findout total salary drawn by all managers.

let employees = [
  {
    name: "Janhvee",
    empid: "E01",
    role: "Manager",
    salary: 50000
  },
  {
    name: "Anmol",
    empid: "E02",
    role: "QA",
    salary: 40000       
  },
  {
    name: "Arpita",
    empid: "E03",
    role: "Developer",
    salary: 60000
  },
  {
    name: "Aditi",
    empid: "E04",
    role: "Manager",
    salary: 55000
  },
  {
    name: "Harshini",
    empid: "E05",
    role: "QA",
    salary: 45000
  },
  {
    name: "Dhananjay",
    empid: "E06",
    role: "Manager",
    salary: 70000
  },
];

var totalSalary = employees.filter(emp => emp.role == "Manager").reduce((acc, emp) => {
  return acc + emp.salary;
}, 0);
 
console.log("Total Salary: "+totalSalary);