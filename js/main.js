console.log('main js');

const par1 = new Partner('James', 'Smith', 33);
const par2 = new Partner('Jaill', 'Smithson', 28);
console.log('par1 ===', par1);
// kuriam projektus
const pro1 = new Project('Headeris', 100);
const pro2 = new Project('Aside', 200);
const pro3 = new Project('mobile', 500);

// priskikiriam pirma projekta prie par1
par1.addProject(pro1);
par1.addProject(pro2);
par1.addProject(pro3);

// pirmas programuotojas baigia pirma darba
par1.workDone(pro1);
par1.workDone(pro3);
console.log('par1 ===', par1);

par1.calcPay();
