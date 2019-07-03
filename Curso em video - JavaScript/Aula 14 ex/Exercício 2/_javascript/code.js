function inserir() {
    let recebe = Number(document.getElementById('valor').value)
    let saida = document.getElementById('tabuada')
    saida.innerHTML = ''
    if (!recebe) {
        alert('Favor preencher o valor para gerar a tabuada!')
        return 0;
    }

    for (i = 1; i <= 10; i++) {
        let item = document.createElement('option')
        item.text = `${i} x ${recebe} = ${recebe * i} \u{1F600} `;
        saida.appendChild(item)
    }

    saida.style.background = 'green'
}