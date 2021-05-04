function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        return console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
}

function ContaCorrete(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrete.prototype = Object.create(Conta.prototype);
ContaCorrete.prototype.constructor = ContaCorrete;

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo + this.limite) {
        return console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
    }
    this.saldo -= valor;
    this.verSaldo();
}

const cc = new ContaCorrete(1234, 63524, 100, 100)
cc.sacar(180)

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(0235, 45682, 300)
cp.verSaldo()