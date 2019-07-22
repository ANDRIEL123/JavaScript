const arr = [1, 3, 5, 10, 15, 20]

const newArr = arr.map(function(item, index) { //PERCORRENDO ARRAY E EXECUTA A AÇÃO NECESSÁRIA
    return item + index
})

console.log(newArr)

const sum = arr.reduce(function(total, next) { //PEGA O VALOR DO RETORNO E JOGA NO TOTAL, VAI PERCORRENDO E SOMANDO
    return total + next
})

console.log(sum)

const filter = arr.filter(function(item) { //PERCORRE O ARRAY E FILTRA A OPERAÇÃO
    return item % 2 === 0
})

console.log(filter)

const find = arr.find(function(item) { //VERIFICA SE O VALOR EXISTE NO ARRAY
    return item === 1
})

console.log(find)