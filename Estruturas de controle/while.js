function getInteiroAleatorio() {
    const valor = Math.floor(Math.random() * 10)
    return valor
}

let opcao = 0

while (opcao != 3) {
    opcao = getInteiroAleatorio()
    console.log("Opcao escolhida foi: " + opcao);
}
console.log("feito!")