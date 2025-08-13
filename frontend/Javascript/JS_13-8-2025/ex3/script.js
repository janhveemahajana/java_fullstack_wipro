// ex3/script.js - Ex3: Create an input text box and a button. On click of the button print the length of the text written on the text box.
// This function retrieves the value from an input field with the ID "inputField"
// and calculates its length
function len() {
  str = document.getElementById("inputField").value;
  length = str.length;
  console.log("Length is " + length);
}
