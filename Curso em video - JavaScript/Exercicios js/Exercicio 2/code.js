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

    if (ynasc > y && mnasc > m && dnasc > d) {
        alert('Data invalida, data informada maior que data atual!')
    } else {
        let meses = somaMeses(mnasc,m)
        let dias = somaDia(dnasc, d)
        let anos = y - ynasc
        let sexo = trazSexo()
        if (mnasc > m) {
            anos -= 1
        }

        saida.innerHTML = anos + ' anos ' + 
        meses + ' meses ' + dias + ' dias de sexo ' + sexo
        geraFotoDinamica(anos, sexo)
    }
}

function somaDia(num1,num2) {
    if (num1 > num2) {
        return num2 + (30 - num1)
    } else if (num2 > num1){
        return num2 - num1
    }else{
        return 0
    }
}

function somaMeses(num1,num2) {
    if (num1 > num2) {
        return num2 + (12 - num1)
    } else if (num2 > num1) {
        return (num2 + 1) - num1
    } else {
        return 0
    }
}

function trazSexo() {
    var sex = document.getElementsByName('radsex')

    if(sex[0].checked) {
        return 'Masculino'
    } else {
        return 'Feminino'
    }
}

function geraFotoDinamica(y, sexo) {
    let img = document.getElementById('foto')
    if(y < 5 && sexo == 'Masculino') {
        img.src = '_imagens/bebemasculino.jpg'
    } else if (y < 5 && sexo == 'Feminino') {
        img.src = '_imagens/bebefeminino.jpg'
    }
    else if(y > 5 && y < 11 && sexo == 'Masculino') {
        img.src = '_imagens/criancamasculino.jpg'
    } else if (y > 5 && y < 11 && sexo == 'Feminino') {
        img.src = '_imagens/criancafeminino.jpg'
    }
    else if(y > 11 && y < 19 && sexo == 'Masculino') {
        img.src = '_imagens/adolescentemasculino.jpg'
    } else if (y > 11 && y < 19 && sexo == 'Feminino') {
        img.src = '_imagens/adolescentesfeminino.jpg'
    }
    else if(y > 18 && y < 36 && sexo == 'Masculino') {
        img.src = '_imagens/adultomasculino.jpg'
    } else if (y > 18 && y < 36 && sexo == 'Feminino') {
        img.src = '_imagens/adultofeminino.jpg'
    }
    else if(y > 35 && y < 51 && sexo == 'Masculino') {
        img.src = '_imagens/experientemasculino.jpg'
    } else if (y > 35 && y < 51 && sexo == 'Feminino') {
        img.src = '_imagens/experientefeminino.jpg'
    }
    else if(y > 50 && y < 71 && sexo == 'Masculino') {
        img.src = '_imagens/velhomasculino.jpg'
    } else if (y > 50 && y < 71 && sexo == 'Feminino') {
        img.src = '_imagens/velhofeminino.jpg'
    }
    else if(y > 70 && sexo == 'Masculino') {
        img.src = '_imagens/bemvelhomasculino.jpg'
    } else if (y > 70 && sexo == 'Feminino') {
        img.src = '_imagens/bemvelhofeminino.jpg'
    }
    
}

function recarregaPagina() {
    location.reload()
    
}