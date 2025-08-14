class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}

let calc = new Calculator();
console.log("Add:", calc.add(5, 3));
console.log("Subtract:", calc.subtract(5, 3));