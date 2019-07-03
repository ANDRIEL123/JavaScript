function contar() {
    var inicio = document.getElementById('inicio').value
    var passo = document.getElementById('passo').value
    var fim = document.getElementById('fim').value
    var saida = document.getElementById('saida')

    if (!inicio || !passo || !fim) {
        saida.innerHTML = 'Impossível contar, favor preencha todos os campos.'
        alert('Algum dado não preenchido!')
    } else {
        saida.innerHTML = 'contando: '

        let i = Number(inicio)
        let p = Number(passo)
        let f = Number(fim)
        
        if (p <= 0) {
            alert('Passo inválido, favor preencher com um valor maior que zero.')
            saida.innerHTML = 'O valor do passo deve ser maior que zero.'
            return 0;
        } 
        
        if(i < f) {
            //CONTAGEM CRESCENTE
            for (; i <= f; i += p) {
                saida.innerHTML += `${i} \u{1F449} `
            }
        } else {
            //CONTAGEM DECRESCENTE
            for (; i >= f; i -= p) {
                saida.innerHTML += `${i} \u{1F449} `
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }
    
}