console.log('main js');

const par1 = new Partner('James', 'Smith', 33);
const par2 = new Partner('Jaill', 'Smithson', 28);
console.log('par1 ===', par1);

const pro1 = new Project('Headeris', 100);
// priskikiriam pirma projekta prie par1
par1.addProject(pro1);
par1.addProject({ title: 'Footer', price: 120 });
