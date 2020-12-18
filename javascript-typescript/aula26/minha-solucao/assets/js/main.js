function imc(){
    const form = document.querySelector('.form')
    const result = document.querySelector('.result')

    function calc (event){
        event.preventDefault();

        const peso = Number(document.querySelector('#peso').value);
        const altura = Number(document.querySelector('#altura').value);
        const calculoImc = peso / (altura * altura); 
        const imc = Number(calculoImc.toFixed(2));

        if (peso === 0){
            result.innerHTML = `<p style="color: red;">Peso inválido. <p>`
        } else if (altura === 0) {
            result.innerHTML = `<p style="color: red;">Altura inválida. <p>`
        } else {
            if (imc < 18.5) {
                result.innerHTML = `Seu imc é de ${imc}. Você está abaixo do peso. Cuidado!`;
            } else if (imc >= 18.5 && imc <= 24.9) {
                result.innerHTML = `Seu imc é de ${imc}. PARABÉNS! Você está com o peso normal`;
            } else if (imc >= 25 && imc <= 29.9){
                result.innerHTML = `Seu imc é de ${imc}. Eita! Sobrepeso! Fique atento!`;
            } else if (imc >= 30 && imc <= 34.9) {
                result.innerHTML = `Seu imc é de ${imc}. Cuidado! Obesidade grau 1`;
            } else if (imc >= 35 && imc <= 39.9) {
                result.innerHTML = `Seu imc é de ${imc}. Cuidado! Obesidade grau 2`;
            } else if (imc > 40) {
                result.innerHTML = `Seu imc é de ${imc}. Cuidado! Obesidade grau 3`;
            }
        }
        console.log(typeof altura, altura);
    }

    form.addEventListener('submit', calc);
}

imc();
