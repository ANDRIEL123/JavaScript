const pessoa = {
    saudacoes: 'Bom dia!',
    falar() {
        console.log(this.saudacoes)
    }
}

pessoa.falar()

//SEM BIND TRÁS UNDEFINED
const falar = pessoa.falar
falar()

//ATRIBUINDO BIND PARA AMARRA O OBJETO PESSOA A FUNCAO
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()