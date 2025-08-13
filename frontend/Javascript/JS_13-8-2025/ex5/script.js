//Ex5: Declare and use variables using var let and const to understand their scopes.

var a = 1;
a = 2; // This will change the global 'a' to 2
var a = 3; // This will redeclare 'a' in the global scope, but it is not recommended to do so
let b = 2;
const c = 9;

function test() {
  var a = 4; // This 'a' is local to the function
  let b = 5; // This 'b' is also local to the function
  const d = 5; // This 'd' is local to the function
  console.log("test - " + a, b, c, d); // Outputs: 4, 5, 3, 5

  function inner() {
    var a = 6; // This 'a' is local to the inner function
    let b = 7; // This 'b' is also local to the inner function
    console.log("inner "+a, b, c); // Outputs: 6, 7, 3
  }
  console.log("test - " + a, b, c); // Outputs: 4, 5, 3
  
    inner();
}

test();
console.log("global " + a, b, c);
