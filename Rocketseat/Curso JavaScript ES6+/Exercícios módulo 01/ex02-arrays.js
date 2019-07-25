const usuarios = [
    { nome: 'Andriel', idade: 22, empresa: 'Dominio' },
    { nome: 'Teste', idade: 40, empresa: 'Google' },
    { nome: 'Teste2', idade: 17, empresa: 'Dominio' }
]

// Crie uma variável que contenha todas idades dos usuários
const map = usuarios.map(function (value, index) {
    return value.idade
})

console.log('Todas as idades dos usuários: ' + map)


// Crie uma variáveis que tenha apenas os usuários que trabalham na Dominio e com mais de 18 anos
const filter = usuarios.filter(function (value) {
    return value.empresa == 'Dominio' && value.idade > 17
})

console.log('Usuarios com mais de 18 anos e que trabalham na Dominio: ')

console.log(filter)

//Crie uma variável que procura por um usuário que trabalhe na empresa Syntesis
const find = usuarios.find(function(value) {
    return value.empresa == 'Syntesis'
})

console.log('Procura pela empresa Syntesis: ')
console.log(find)

/*
Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
*/

const multiplica = usuarios.map(function (value, index) {
    return value.idade * 2
})

console.log(multiplica)

const filtra = multiplica.filter(function(value) {
    return value < 49
})

console.log(filtra)