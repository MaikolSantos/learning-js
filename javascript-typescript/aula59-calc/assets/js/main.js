function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = e => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const el= event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta Inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta Inválida');
            return;
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus(); //importante para que o cursor se mantenha no input
    } 
    this.clear = () => this.display.value = ''; //quando temos só uma linha podemos usar só uma linha; como nos ifs
    this.del = () => this.display.value = this.display.value.slice(0, -1);


}

const calculadora = new Calculadora();
calculadora.inicia();