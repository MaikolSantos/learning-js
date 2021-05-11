class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    
    falar(text) {
        console.log(`${this.nome} disse: ${text}`);
    }
}

const p1 = new Pessoa('Maikol', 'Santos')
p1.falar('Hello, World!')
