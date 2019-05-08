//Armazenando funcao em variavel

const imprimirSoma = function(a,b){
    console.log(a + b);
}

imprimirSoma(2,3);

//Armazenando uma funcao arrow em uma variável

const soma = (a,b) => {
    return a + b;
}
console.log(soma(2,6));

const subtracao = (a, b) => a - b
console.log(subtracao(2,1))