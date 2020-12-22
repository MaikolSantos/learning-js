// function main (){
//     const data = new Date();
//     const dia = data.getDay();
//     const numMes = data.getMonth();

//     const diaSemana = semana(dia);

//     const mes = meses(numMes);    

//     const titulo = document.querySelector('.container h1');
//     titulo.innerHTML = (`${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}` +
//      `às ${zero(data.getHours())}:${zero(data.getMinutes())}`);
// }

// function semana(num){
//     const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
//     'Sexta-feira', 'Sábado', 'Domingo'];
//     return diasSemana[num];
// }

// function meses(num){
//     const mes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 
//     'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return mes[num];
// }

// function zero(num){
//     return num < 10 ? `0${num}` : num;
// }

// main();

const titulo = document.querySelector('.container h1');
const data = new Date();
titulo.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });
