let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varD = 'D'; // guardar o valor de varA

varD = varA;
varA = varB;
varB = varC;
varC = varD;

console.log(varA, varB, varC);
