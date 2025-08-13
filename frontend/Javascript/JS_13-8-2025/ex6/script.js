// Ex6: Create a list of names in an array. Filterout the names that are more than 5 characters long and convert them to uppercase.

let names = ["Janhvee", "Anmol", "Aditi", "Arpita", "Dhananjay", "Harshini"];

let result = names.filter(name => name.length > 5).map(name => name.toUpperCase());
console.log(result);