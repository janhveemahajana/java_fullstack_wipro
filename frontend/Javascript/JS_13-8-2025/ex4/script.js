// Ex4: Set the text box length to 50. Then at bottom of the textbox place a label , each time you type something it should show x number of characters are remaining.

//add an event listener to the input field to track changes
document.getElementById("inputField").addEventListener("input", remain);
function remain() {
  var str = document.getElementById("inputField").value;
  var x = str.length;
  var remaining = 50 - x;
  document.getElementById("lengthLabel").innerText = remaining;
}
