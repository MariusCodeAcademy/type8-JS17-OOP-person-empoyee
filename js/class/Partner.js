'use strict';
class Partner extends Person {
  #projects = [];
  constructor(name, surname, age) {
    super(name, surname, age);
  }
  addProject(project) {
    // patikrinti kad butu sukurtas pagal Project Klase
    if (!(project instanceof Project)) return console.log('bad object');

    this.#projects.push(project);
  }

  workDone(project) {
    if (!(project instanceof Project)) return console.log('bad object');
    project.finishProject();
  }

  calcPay() {
    const doneProjects = this.#projects.filter((pr) => pr.done === true);
    console.log('doneProjects ===', doneProjects);
    const totalToPay = doneProjects.reduce((total, prObj) => total + prObj.price, 0);
    console.log('totalToPay ===', totalToPay);
  }
}
