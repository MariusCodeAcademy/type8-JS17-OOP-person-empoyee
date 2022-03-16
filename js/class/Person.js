'use strict';
class Person {
  constructor(name, surname, idCode, age, gender) {
    this.name = name;
    this.surname = surname;
    this.idCode = idCode;
    this.age = age;
    this.gender = gender;
  }
  greet() {
    const greetString = `Hello my name is ${this.name} and I am ${this.age} years old`;
    console.log(greetString);
  }
}
// Person.call({}, 'James', 'Jameson', 458, 25, 'male')
const p1 = new Person('James', 'Jameson', 458, 25, 'male');
const p2 = new Person('Jill', 'Smith', 123, 22, 'female');
console.log('p1 ===', p1);
p1.greet();
p2.greet();
