let collection = []

class carro {
    constructor(fabricante, nome, ano) {
        this.fabricante = fabricante
        this.nome = nome
        this.ano = ano
    }
}

let c = new carro('volks','saveiro', 2015)
collection.add(c)
console.log(collection)