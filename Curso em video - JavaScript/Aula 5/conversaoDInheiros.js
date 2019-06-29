let valor = 1550


console.log(valor.toFixed(2)) //2 casas decimais
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) //formato real
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})) //formato dolar
console.log(valor.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})) //formato euro