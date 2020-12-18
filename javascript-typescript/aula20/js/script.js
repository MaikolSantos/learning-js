function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = []

    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //pegando os valores que o usuário digitou e empurrando para o array como um objeto {}
        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value, 
            altura: altura.value
        });

        console.log(pessoas);

        //Adicionando o valor que o usuário digitou em uma div
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
        
    }

    form.addEventListener('submit', recebeEventoForm);
    
}

meuEscopo();