class Util {
  getDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }

  getPIValue() {
    return Math.PI;
  }

  getC2F(Centigrade) {
    return (Centigrade * 9) / 5 + 32;
  }

  getFibonacci(n) {
    let a = 0,
      b = 1,
      c;
    if (n === 0) return a;
    if (n === 1) return b;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
}

let util = new Util();

console.log(util.getDate(14, 8, 2025));
console.log(util.getPIValue());
console.log(util.getC2F(0));
console.log(util.getFibonacci(5));
