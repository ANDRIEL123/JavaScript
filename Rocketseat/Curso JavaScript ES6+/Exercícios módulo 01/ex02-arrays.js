const usuarios = [
    { nome: 'Andriel', idade: 22, empresa: 'Dominio' },
    { nome: 'Teste', idade: 40, empresa: 'Google' },
    { nome: 'Teste2', idade: 25, empresa: 'Dominio' }
]

const map = usuarios.map(function (value, index) {
    return value.idade
})

console.log(map)

const filter = usuarios.filter(function (value) {
    return value.empresa == 'Dominio'
})

console.log(filter)