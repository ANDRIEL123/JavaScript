console.log(this)
const pessoa = {
    saudacoes: 'Bom dia!',
    falar() {
        console.log(this.saudacoes)
    }
}


//SEM BIND TRÁS UNDEFINED
//BIND REFERENCIAO O NOVO CONTEXTO DO THIS COMO PESSOA
pessoa.falar()
const falar = pessoa.falar.bind(pessoa)
falar()


