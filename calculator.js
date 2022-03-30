class calculator {
  constructor(a, b){
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  } 

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  mutiply() {
    return this.a * this.b;
  }
}

module.exports = calculator;