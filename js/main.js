console.log('main js');

const par1 = new Partner('James', 'Smith', 33);
const par2 = new Partner('Jaill', 'Smithson', 28);
console.log('par1 ===', par1);
// kuriam projektus
const pro1 = new Project('Headeris', 100);
const pro2 = new Project('Aside', 200);
const pro3 = new Project('mobile', 500);
const newProjects = [
  new Project('Footer html', 130),
  new Project('Contact form', 330),
  new Project('Main aside', 150),
  new Project('About us page', 430),
];

// priskikiriam pirma projekta prie par1
par1.addProject(pro1);
par1.addProject(pro2);
par1.addProject(pro3);

newProjects.forEach((pr) => par2.addProject(pr));

// andtras partneris baigia dabus
par2.workDone(newProjects[0]);
par2.workDone(newProjects[3]);

// pirmas programuotojas baigia pirma darba
par1.workDone(pro1);
par1.workDone(pro3);
console.log('par1 ===', par1);

// Emploees
const em = [
  new Emploee('Mike', 'Mikson', 33, 15),
  new Emploee('Jill', 'Jill', 30, 17),
  new Emploee('John', 'Jill', 28, 20),
];

em[0].work(160);
em[1].work(500);
em[2].work(50);

const allWorkers = em.concat(par1, par2);
console.log('allWorkers ===', allWorkers);
const algos = allWorkers
  .map((worker) => {
    return {
      id: worker.id,
      name: worker.name,
      moketi: worker.calcPay(),
    };
  })
  .sort((a, b) => a.moketi - b.moketi);
console.table(algos);
