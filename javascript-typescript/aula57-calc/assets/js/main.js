//treinando com factory function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        

        iniciar() {
            this.cliqueBotoes();
            this.enter();
        },

        enter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.conta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        conta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch (error) {
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.conta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();