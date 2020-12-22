function main (){
    const data = new Date();
    const dia = data.getDay();
    const num = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    
    const diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
    'Sexta-feira', 'Sábado', 'Domingo'];

    const titulo = document.querySelector('h1');
    titulo.innerHTML = `${diasSemana[dia]}, ${num} de ${mes} de ${ano} às ${horas}:${minutos}`;
    
}

main();
