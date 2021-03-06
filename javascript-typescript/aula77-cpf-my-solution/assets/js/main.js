const button = document.querySelector('button')
const feedback = document.querySelector('.feedback')
const inputCpf = document.querySelector('#input-test-1')

function validar(event) {
    event.preventDefault()
    const cpfUser = inputCpf.value

    const clearCpfUser = cpfUser.trim().replace(/\D+/g, '')

    function criaCpf9() {
        const cpfString = clearCpfUser.slice(0, 9)
        return Array.from(cpfString)  
    }

    function returnDigit(array) {
        const somaDigitos = array.reduce( (acc, num, index) => {
            let multiplo = (array.length + 1) - index
            return acc + (num * multiplo)
        }, 0)
        const digit = 11 - (somaDigitos % 11)
        return digit > 9 ? String(0) : String(digit) 
    }

    function criaDigitos() {
        let cpf9 = criaCpf9(cpfUser)
        const digit10 = returnDigit(cpf9) 
        const cpf10 = cpf9.concat(digit10)
        const digit11 = returnDigit(cpf10)
        const cpf11 = cpf10.concat(digit11)
        return cpf11.join('')
    }

    const checkCpf = criaDigitos() === clearCpfUser

    if (checkCpf) {
        feedback.classList.remove('invalido')
        feedback.innerText = 'CPF Válido'
        feedback.classList.add('valido')
    }
    if (!checkCpf) {
        feedback.classList.remove('valido')
        feedback.innerText = 'CPF Inválido'
        feedback.classList.add('invalido')
        inputCpf.classList.add('invalido')
        inputCpf.value = ''
    }
}

button.addEventListener('click', validar)


