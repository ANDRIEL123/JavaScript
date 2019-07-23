const usuario = {
    nome: 'Andriel',
    idade: 22,
    endereco: {
        cidade: 'Santa Maria',
        estado: 'RS'
    },
}

function mostraNome({nome, idade, endereco: { cidade }}) {
    console.log(nome)
    console.log(idade)
    console.log(cidade)
}

mostraNome(usuario)