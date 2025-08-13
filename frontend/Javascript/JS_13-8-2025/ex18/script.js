function calculate(operation) {
  let number1 = parseFloat(document.getElementById("num1").value);
  let number2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById("result").innerText = "Please enter both numbers.";
    return;
  }

  if (operation === "add") {
    result = number1 + number2;
  } else if (operation === "subtract") {
    result = number1 - number2;
  } else if (operation === "multiply") {
    result = number1 * number2;
  } else if (operation === "divide") {
    if (number2 === 0) {
      document.getElementById("result").innerText = "Cannot divide by zero!";
      return;
    }
    result = number1 / number2;
  }

  document.getElementById("result").innerText = "Result: " + result;
}
