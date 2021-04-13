const produto = {
    nome: 'Caneca',
    preco: 1.8
}

// const novoProduto = {
//     ...produto
// }
// novoProduto.nome = 'Copo'

//ou podemos usar Object.assing({}, produto, {chave: quantos-objetos-quiser-separados-por-virgula})

//Object.keys(produto) //retorna um array com as chaves do objeto

//Object.freeze(produto) //congela meu objeto e não podemos mais alterá-lo

// Object.getOwnPropertyDescriptor(produto, 'nome') // retorna o objeto property da propriedade 'nome' do objeto produto