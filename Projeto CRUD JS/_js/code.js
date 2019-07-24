var arrProd = []

class Produto {
    constructor(id, nome, preco, observacao, grupo) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.observacao = observacao;
        this.grupo = grupo;
    }
}

function validaEntradaDeDados(produto) {
    if (!produto.id || !produto.nome || !produto.preco || !produto.observacao || !produto.grupo) {
        alert('Favor preencher todos campos de entrada!')
        return false
    }
}

function validaIdSeExiste(id) {
    for (const prod of arrProd) {
        if(prod.id == id) {
            alert('ID já cadastrado!')
            return false
        }
    }
}

document.querySelector('input#adiciona').onclick = function () {
    let id = document.querySelector('input#id').value
    let nome = document.querySelector('input#nome').value
    let preco = document.querySelector('input#valor').value
    let observacao = document.querySelector('input#observacao').value
    let grupo = document.querySelector('input#grupo').value

    let produto = new Produto(id, nome, preco, observacao, grupo)

    
    
    if (validaEntradaDeDados(produto) != false && validaIdSeExiste(id) != false) {
        arrProd.push(produto)
        adicionaNaTabela(produto)

        document.querySelector('input#id').value = Number(id) + 1
    }

}

function adicionaNaTabela(item) {
    let tabela = document.getElementById('tblprod')

    let novaColuna1 = document.createElement('td')
    let novaColuna2 = document.createElement('td')
    let novaColuna3 = document.createElement('td')
    let novaColuna4 = document.createElement('td')
    let novaColuna5 = document.createElement('td')

    let novaLinha = document.createElement('tr')

    let tblid = document.createTextNode(item.id)
    let tblnome = document.createTextNode(item.nome)
    let tblvalor = document.createTextNode(item.preco)
    let tblobservacao = document.createTextNode(item.observacao)
    let tblegroup = document.createTextNode(item.grupo)


    novaColuna1.appendChild(tblid)
    novaColuna2.appendChild(tblnome)
    novaColuna3.appendChild(tblvalor)
    novaColuna4.appendChild(tblobservacao)
    novaColuna5.appendChild(tblegroup)

    novaLinha.appendChild(novaColuna1)
    novaLinha.appendChild(novaColuna2)
    novaLinha.appendChild(novaColuna3)
    novaLinha.appendChild(novaColuna4)
    novaLinha.appendChild(novaColuna5)

    tabela.appendChild(novaLinha)
    tabela.style.visibility = 'visible'

}