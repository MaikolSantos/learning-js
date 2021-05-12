const velocidade = Symbol('velocidade');

class Carro {
    constructor(nome){
        this.nome = nome;
        this[velocidade] = 0;
    }

    get velocidade() {
        return this[velocidade];
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[velocidade] = valor;
    }

    acelerar() {
        if(this[velocidade] >= 100) return;
        this[velocidade]++;
    }

    desacelerar(){
        if(this[velocidade] <= 0) return;
        this[velocidade]--;
    }
}

const c1 = new Carro('gol');

for(let i=0; i < 110; i++){
    c1.acelerar(); //será chamado 110 vezes, porém só dará incremento 100 vezes por causa da condição no método
}

c1.velocidade = -1;

console.log(c1)