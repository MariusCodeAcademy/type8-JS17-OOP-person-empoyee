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
}
