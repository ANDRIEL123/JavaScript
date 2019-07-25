const empresa = {
    nome: 'Dominio',
    endereco: {
        cidade: 'Santa Maria',
        estado: 'RS'
    }
}


const nome1 = {nome, endereco: { cidade, estado }} = empresa

console.log(nome)
console.log(cidade)
console.log(estado)
console.log(nome1)