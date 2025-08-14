function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result1 = pair<string, number>("Age", 23);
console.log(result1);
let result2 = pair<boolean, number>(true, 25);
console.log(result1);