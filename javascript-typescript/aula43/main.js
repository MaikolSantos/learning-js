// Escreva uma função que recebe um número e retorne o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número NÃO divisível por 3 e 5 = Retorna o prórprio número
// Checar se o número é realmente número = retornar o próprio número
// Use a função com números de 0 a 100

const getNum = (num) => {
    if (Number.isNaN(num)) {
        return num
    } else {
        if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
        if (num % 3 === 0) return 'Fizz'
        if (num % 5 === 0) return 'Buzz'
        return num
    }
}

console.log(getNum('Maikol'))

for (i = 0; i <= 100; i++) {
    console.log(i, getNum(i))
}