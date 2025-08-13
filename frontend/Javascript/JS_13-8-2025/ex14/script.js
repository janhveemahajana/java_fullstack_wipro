// ex14/script.js Create an array of strings containing name of some cities. In html place a button and an empty dropdown. On click of the button add the city names from the array to the drop down. The names in array will be unordered but city names in the drop down will be ordered.

let cities = ["Pune", "Delhi", "Nagpur", "Mumbai", "Chennai", "Bangalore"];

function addCities() {
  let sortedCities = cities.sort();

  let dropdown = document.getElementById("cityDropdown");

  dropdown.length = 1;

  for (let city of sortedCities) {
    let option = document.createElement("option");
    option.text = city;
    option.value = city;
    dropdown.add(option);
  }
}
