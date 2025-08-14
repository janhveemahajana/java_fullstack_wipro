class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let demoNumber1:Box<number> = new Box<number>(42);
console.log(demoNumber1.getValue());

