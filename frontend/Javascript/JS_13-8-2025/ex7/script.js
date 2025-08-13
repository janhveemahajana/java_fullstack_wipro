// Ex7: Create a list of persons having name , age and city of residence. Filter out the people who are eligible to vote.

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

let eligibleperson = persons.filter((person) => {
  return person.age >= 18;
});

console.log(eligibleperson);
