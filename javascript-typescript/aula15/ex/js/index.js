const num = Number(prompt('Digite um número qualquer: '));

/*document.body.innerHTML += `<h1>Seu número é ${num}</h1><br>`;
document.body.innerHTML += `A raiz quadrade é de ${(num ** (1/2)).toFixed(2)}<br>`;
document.body.innerHTML += `${num} é inteiro: ${Number.isInteger(num)}<br>`;
document.body.innerHTML += `é NaN? ${Number.isNaN(num)}<br>`;
document.body.innerHTML += `Arredondado para baixo é: ${Math.floor(num)}<br>`;
document.body.innerHTML += `Arredondado para cima é: ${Math.ceil(num)}<br>`;
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br>`;*/

const yourNumber = document.getElementById('your-number');
const text = document.getElementById('text');

yourNumber.innerHTML = `${num}`;
text.innerHTML = `<p> A raiz quadrade é de ${(num ** (1/2)).toFixed(2)}<br></p>`;
text.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}<br></p>`;
text.innerHTML += `<p>é NaN? ${Number.isNaN(num)}<br></p>`;
text.innerHTML += `<p>Arredondado para baixo é: ${Math.floor(num)}<br></p>`;
text.innerHTML += `<p>Arredondado para cima é: ${Math.ceil(num)}<br></p>`;
text.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}<br></p>`;
