const arr = [1, 2, 3, 4, 5]

/*  PEGA OS VALORES DO ARRAY E SOMA + 10  */

let adiciona = arr.map(item => item + 10)
console.log(adiciona)

const usuario = { nome: 'Andriel', idade: 22}

/*     MOSTRA IDADE   */

//FUNCAO TRADICIONAL
function mostraIdade(usuario) {
    return usuario.idade
}
console.log(mostraIdade(usuario))

//ARROW FUNCTION
const user = usuario => usuario.idade
console.log(user(usuario))

/*   MOSTRA IDADE E NOME   */

const nome = 'Andriel'
const idade = 24

const mostraUsuario = (nome, idade) => {
    return {nome, idade}
}

console.log(mostraUsuario(nome, idade))


//--------------------------------------------------//
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    }) 
}

//----CONVERTENDO EM ARROW FUNCTION-----//

const promiseConv = () => new Promise((resolve, reject) => {
    resolve();
})