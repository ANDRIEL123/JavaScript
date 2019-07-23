let arr = [1, 5, 11, 22, 30]

//REST PEGA O RESTO DAS PROPRIEDADES

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 5))


//SPREAD REPASSA AS INFORMAÇÕES DE UMA ESTRUTURA DE DADOS PARA OUTRA

let arr1 = [1, 3, 6]
let arr2 = [2, 4, 5]

let arr3 = [...arr1, ...arr2]
console.log(arr3)