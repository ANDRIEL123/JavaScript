function verificaIdade() {
    let valor = document.getElementById('data').value
    let saida = document.getElementById('saida')
    var data = new Date()
    d = data.getDay()
    m = data.getMonth()
    y = data.getFullYear()
    
    ynasc = Number(valor[0] + valor[1] + valor[2] + valor[3])
    mnasc = Number(valor[5] + valor[6])
    dnasc = Number(valor[8] + valor[9])

    let meses = somaMesDia(m, mnasc)
    let dias = somaMesDia(d, dnasc)
    let anos = y - ynasc
    saida.innerHTML = 'Sua idade é: ' + anos + ' anos ' + meses + ' meses ' + dias + ' dias'
}

function somaMesDia(num1,num2) {
    if (num1 > num2) {
        return num1 - num2
    } else {
        return num2 - num1    
    }
}
