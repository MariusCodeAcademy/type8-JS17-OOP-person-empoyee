'use strict';
class Emploee extends Person {
  // private properties
  #payPerHour;
  #hoursWorked = 0;

  constructor(name, surname, age, hourlyPay) {
    super(name, surname, age);
    this.#payPerHour = hourlyPay;
  }
  // geteris, leidizia tam tikru budu atvaizduoti reiksmes
  get hoursWorked() {
    // validacija
    return this.#hoursWorked;
  }
  // seteris nustatyti valandiniui
  set payPerHour([valandinis, pass]) {
    if (pass === 'blue') {
      this.#payPerHour = valandinis;
    } else {
      console.log('wrong pass');
    }
  }

  // metodas work(kiekVal) priima kiek valadu issdirbta ir padina tuo skaiciu #hoursWorked
  work(valSk) {
    this.#hoursWorked += valSk;
  }
  calcPay() {
    const totalToPay = this.#hoursWorked * this.#payPerHour;
    this.#hoursWorked = 0;
    return totalToPay;
  }
  // calcPay() - aprasyti metododa kuris apskaiciuoja
  // kokia suma sumoketi ir nunulina isdirbtas valandas
}

const e1 = new Emploee('Mike', 'Mikson', 33, 15);
const e2 = new Emploee('Bob', 'Bobson', 35, 17);
e1.hasCar = true;
e1.greet();

// console.log('e1 b4 work ===', e1);
e1.work(160);
e2.work(100);
e2.work(20);

console.log('e1 after work work ===', e1);
console.log('2 after work work ===', e2.hoursWorked);

// const e1Sallary = e1.calcPay();
// const e2Sallary = e2.calcPay();
const algos = [e1, e2].map((em) => {
  return {
    name: em.name,
    atlygiminas: em.calcPay(),
  };
});
console.log('algos ===', algos);
console.log('e1 after pay ===', e1);
// e1.payPerHour = 20;
e1.payPerHour = [20, 'blue'];
console.log('e1 ===', e1);
