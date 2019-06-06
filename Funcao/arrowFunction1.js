let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return 'olá'
}
console.log(ola())

//Arrow function com retorno implicito (Sem precisar usar return)
ola = (texto1, texto2) => texto1 + texto2

console.log(ola('Teste', ' Deu certo'))