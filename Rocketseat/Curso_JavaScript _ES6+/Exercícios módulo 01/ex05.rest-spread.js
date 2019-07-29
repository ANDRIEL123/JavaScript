const arr = [1, 2, 3, 4, 5, 6]

//REST
const x = [a, ...b] = arr

console.log(x)


const soma = (...params) => {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1, 2, 3, 4, 5))


//SPREAD
const usuario = {
    nome: 'Andriel',
    idade: 22,
    endereco: {
        cidade: 'Santa Maria',
        uf: 'RS',
        pais: 'Brasil',
    }
}
const usuario2 = { ...usuario, nome: 'Jeka' } //PEGA TODOS OS DADOS DO USUARIO E SÓ TROCA O NOME PRA JEKA
const usuario3 = { ...usuario, nome: 'Joaozinho' }

console.log(usuario2)
console.log(usuario3)