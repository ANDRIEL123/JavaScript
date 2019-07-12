let num = []
let saida = document.getElementById('adicionaNumero')

function recebeValorAddSelect() {
    if (temValor() != 0 && numMaiorMenor() != 1) { //VALIDA SE EXISTE VALOR NO CAMPO
    let numAux = Number(document.getElementById('txt-numero').value)
    let val = estaNaLista(numAux)
    if (val != 1) { // VALIDA SE O VALOR JÁ EXISTE NO VETOR
        num.push(Number(document.getElementById('txt-numero').value))
        let item = document.createElement('option')
        item.text = `Valor adicionado = ${num[num.length - 1]}`
        saida.appendChild(item)
        }
    }
}

function estaNaLista(numAux) {
    for (i = 0; i < num.length; i++) {
        if (numAux == num[i]) {
            alert('Numero ja esta na Lista!')
            return 1
        }
    }
}

function temValor() {
    let aux = Number(document.getElementById('txt-numero').value)
    if (!aux) {
        alert('Favor informar um valor para ser adicionado!')
        return 0
    }
}

function numMaiorMenor() {
    let aux = Number(document.getElementById('txt-numero').value)
    if (aux < 0 || aux > 100) {
        alert('O numero não deve ser menor que 0 nem maior que 100!')
        return 1;
    }
}

function maior() {
    let aux = 0
    for (i = 0; i < num.length; i++) {
        if (num[i] > aux) aux = num[i];
    }
    let maior = document.getElementById('maior')
    maior.innerHTML = `Maior: ${aux}`
}

function menor() {
    let aux = 200
    for (i = 0; i < num.length; i++) {
        if (num[i] < aux) aux = num[i];
    }
    let menor = document.getElementById('menor')
    menor.innerHTML = `Menor: ${aux}`
}

function numeroElementos() {
    var total = document.getElementById('totElementos')
    total.innerHTML = `Total de elementos: ${num.length}`
}


function verificaValores() {
    if (num.length > 0) {
    maior();
    menor();
    numeroElementos()
    }
}
