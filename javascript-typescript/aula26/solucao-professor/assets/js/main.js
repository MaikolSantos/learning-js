// capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit',  function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); // posso usar tanto o form quanto e.target
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso){
        setResultado('Peso inválido', false);
        return; // vai parar a função e não executará mais nada para baixo, também não retornará nada, porém executará a linha de cima
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return; 
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC ${imc} (${nivelImc})`;

    setResultado(msg, true);

});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // limpando para que a <div> fique em branco
    // está na função cria P -> const p = document.createElement('p'); // não adiciona, só cria e guarda na memória
    const p = criaP(); // substitui a linha de cima
    if (isValid) {
        p.classList.add('paragrafo-resultado'); // adiciona uma classe ao elemento criado na linha anterior
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p); //adiciona no HTML, especificamente dentro do id resultado

}