function aprovado(n1,n2,n3){
    let m = (n1 + n2 + n3) / 3
    if(m >= 7){
        console.log("aprovado, media = " + m)
    }else{
        console.log("reprovado, media = ", + m)
    }
}
aprovado(7,8,6)