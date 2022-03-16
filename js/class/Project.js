class Project {
  static proCount = 0;
  #id;
  #done;
  #title;
  #price;
  constructor(naujaTitle, naujaPrice) {
    this.#title = naujaTitle;
    this.#price = naujaPrice;
    this.#done = false;
    this.#id = `proj_${++Project.proCount}`;
  }
}

// id, done (lygu false), title, price

const pro1 = new Project('Headeris', 100);
console.log('pro1 ===', pro1);
