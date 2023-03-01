function Calculator() {
  this.operation = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = (str) => {
    let arr = str.split(' ');
    return this.operation[arr[1]](+arr[0], +arr[2]);
  };
  this.addMethod = (name, func) => {
    this.operation[name] = func;
  };
}

const calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate('3 - 7')); // -4
console.log(calc.calculate('3 * 7')); // 21
console.log(calc.calculate('25 / 5')); // 5
console.log(calc.calculate('2 ** 10')); // 1024
