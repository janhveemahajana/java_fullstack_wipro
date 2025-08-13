//Ex10 : Modify the code using map instead of for loop.

let persons = [
  {
    name: "Janhvee",
    age: 23,
    city: "Nagpur",
  },
  {
    name: "Anmol",
    age: 28,
    city: "Pune",
  },
  {
    name: "Arpita",
    age: 18,
    city: "Chandrapur",
  },
  {
    name: "Aditi",
    age: 21,
    city: "Amravati",
  },
  {
    name: "Harshini",
    age: 15,
    city: "Nagpur",
  },
  {
    name: "Dhananjay",
    age: 11,
    city: "Pune",
  },
];

persons.map((person) => {
  if (person.age >= 18) {
    person.status = "Adult";
  } else {
    person.status = "Minor";
  }
});

console.log(persons);
