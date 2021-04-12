function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idadePrivada = idade;
    Object.defineProperty(this, 'idade', {
        enumerable: true,
        configurable: true,
        get: function(){
            return idadePrivada
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Value is not a number')
            }
            idadePrivada = valor;
        }
    });
}

const p1 = new Pessoa('Maikol', 'Santos', 32);
p1.idade = 'Its not a number';
