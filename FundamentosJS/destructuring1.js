const Pessoa = {
    nome: "Andriel",
    idade: 22,
    endereco: {
        logradouro: "Rua comissário Justo",
        numero: 1486
    }
}

const { nome, idade } = Pessoa //vai extrair nome e idade de Pessoa
console.log(nome, idade)

const { sobrenome, bemHumorado = true} = Pessoa
console.log(sobrenome,bemHumorado)

const { endereco: { logradouro, numero, cep } } = Pessoa
console.log(logradouro, numero, cep)