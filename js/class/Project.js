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
  finishProject() {
    this.#done = true;
  }
  // geter
  get done() {
    return this.#done;
  }
  get price() {
    return this.#price;
  }
}

// id, done (lygu false), title, price

// console.log('pro1 ===', pro1);
