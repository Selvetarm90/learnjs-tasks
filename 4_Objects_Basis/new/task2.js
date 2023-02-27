function Calculator() {
  this.read = function () {
    this.x = +prompt('Введите первое число');
    this.y = +prompt('Введите второе число');
  };
  this.sum = function () {
    return this.x + this.y;
  };
  this.mul = function () {
    return this.x * this.y;
  };
}

const calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());
