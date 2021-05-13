class Dispositivo {
    constructor(nome, modelo) {
        this.nome = nome;
        this.modelo = modelo;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) return console.log('aparelho já ligado');
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) return console.log('aparelho já desligado');
        this.ligado = false;
    }
}

class Smarthfone extends Dispositivo {
    constructor(nome, modelo, cor) {
        super(nome, modelo);
        this.cor = cor;
    }
}

const s1 = new Smarthfone('Samsung', 'Galaxy', 'preto');
console.log(s1);