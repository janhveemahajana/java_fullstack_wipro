function sum (...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));  
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));