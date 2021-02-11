//treinando com factory function
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        

        iniciar() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = '';
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
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.iniciar();