class List {
    constructor() {
        this.newItem = []
    }
    add(newItem) {
        this.newItem.push(newItem)
        console.log(newItem)
    }
}

class List2 extends List{
    constructor() {
        super()
        this.usuario = 'Andriel'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const MinhaLista = new List2();


document.getElementById('btn-add').onclick = function() {
    MinhaLista.add('NovoItem');
    MinhaLista.mostraUsuario()
}