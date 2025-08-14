class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `The model ${this.model} make by ${this.make} in year ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  getInfo() {
    return `${super.getInfo()} with ${this.doors} doors`;
  }
}

const myCar = new Car("Suzuki", "Swift", 2020, 5);
console.log(myCar.getInfo());
