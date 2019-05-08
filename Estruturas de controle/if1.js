function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Foi aprovado " + nota)
    } else if (typeof(nota) == Number){
        console.log("Reprovado " + nota)
        }else{
        console.log("Tipo inválido: " + nota)
        }
}


soBoaNoticia(7)
soBoaNoticia("abc")

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log("É verdade... " + valor)
    }else{
        console.log("Mentira!")
    }
}

seForVerdadeEuFalo(5)