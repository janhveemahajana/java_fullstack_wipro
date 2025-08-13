//Ex9: The person list created in Ex7 add a new property status to each object in an array of objects based on the age property ('Adult' if age >= 18, 'Minor' otherwise).

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

for (let i = 0; i < persons.length; i++) {
if (persons[i].age >= 18) {
    persons[i].status = "Adult";
} else {
    persons[i].status = "Minor";
}
}
console.log(persons);