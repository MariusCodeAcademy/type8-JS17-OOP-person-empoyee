'use strict';
class Emploee extends Person {
  // private properties

  constructor(name, surname, age, hourlyPay) {
    super(name, surname, age);
    this.payPerHour = hourlyPay;
  }
}

const e1 = new Emploee('Mike', 'Mikson', 33, 15);
console.log('e1 ===', e1);
e1.greet();
