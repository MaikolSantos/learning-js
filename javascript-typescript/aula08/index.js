const nome = 'Maikol';
const sobrenome = 'Lourençon dos Santos';
const idade = 27;
const peso = 95.5;
const altura = 1.71; //altura em metros
let imc = peso / (altura * altura);
let nasc = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg 
tem ${altura}m de altura e seu IMC é ${imc}`);
console.log(`${nome} nasceu em ${nasc}`);
