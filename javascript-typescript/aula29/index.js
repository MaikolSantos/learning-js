//  minha solução
/*const data = new Date();
const diaSemanaHoje = data.getDay();
const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
'Quinta-feira', 'Sexta-feira', 'Sábado'];

console.log(diasSemana[diaSemanaHoje]);*/

// Switch case

const data = new Date('1988-12-21 22:55:08');
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0:
    diaSemanaTexto = 'Domingo';
    break;
case 1:
    diaSemanaTexto = 'Segunda';
    break;
case 2:
    diaSemanaTexto = 'Terça';
    break;
case 3:
    diaSemanaTexto = 'Quarta';
    break;
case 4:
    diaSemanaTexto = 'Quinta';
    break;
case 5:
    diaSemanaTexto = 'Sexta';
    break;
case 6:
    diaSemanaTexto = 'Sábado';
    break;
default:
    diaSemanaTexto = '';
}

console.log(diaSemanaTexto);