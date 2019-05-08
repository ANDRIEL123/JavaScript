Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log("Acerto mizeravi")
    }else{
        console.log("Tá mal hein...")
    }
}

imprimirResultado(8)