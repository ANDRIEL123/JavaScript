function formataHora(time) {
    if(time < 10) {
        return '0'+String(time)
    } else {
        return time
    }
}

function time() {
    var today = new Date()
    var h = today.getHours()
    hformatado = formataHora(h)
    var m = today.getMinutes() //ESCOPO GLOBAL VAR
    mformatado = formataHora(m)
    var s = today.getSeconds()//ESCOPO GLOBAL VAR 
    sformatado = formataHora(s)
    var hora = document.getElementById('horaatual') //ESCOPO GLOBAL VAR
    hora.innerHTML = hformatado+":"+mformatado+":"+sformatado
    verificaPeriodo(h, m, s)
    setTimeout('time()',500)
}

function verificaPeriodo(h, m, s) {
    let hora = document.getElementById('periodo')
    let imagem = document.getElementById('imgfundo')
    if (h > 5 && h < 12) {
        if (h == 6 && m == 0 & s ==0) {
            location.reload()
        }
        hora.innerHTML = 'Agora é manhã!'
        document.body.style.background = "url('_imagens/manha.jpg')"
        imagem.src = "_imagens/bomdia.jpg"
    } else if (h > 11 && h < 14) {
        if (h == 12 && m == 0 & s ==0) {
            location.reload()
        }
        hora.innerHTML = 'Agora é de meio dia!'
        document.body.style.background = "url('_imagens/meiodia.jpg')"
        imagem.src = "_imagens/bommeiodia.jpg"
    } else if (h > 13 && h < 19) {
        if (h == 14 && m == 0 & s ==0) {
            location.reload()
        }
        hora.innerHTML = 'Agora é de tarde!'
        document.body.style.background = "url('_imagens/tarde.jpg')";
        imagem.src = "_imagens/boatarde.jpg"
        
    } else {
        if(h== 18 && m == 0 && s == 0){
            location.reload()
        }
        hora.innerHTML = 'Agora é noite!'
        document.body.style.background = "url('_imagens/noite.jpg')"
        imagem.src = "_imagens/boanoite.jpg"
    }

    
}