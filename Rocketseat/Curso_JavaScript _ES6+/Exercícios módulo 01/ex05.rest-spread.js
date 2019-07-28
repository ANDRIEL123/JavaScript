const arr = [1, 2, 3, 4, 5, 6]

const x = [a, ...b] = arr

console.log(x)

const soma = (...params) => {
    return params.reduce((total, next) => total + next)
}

console.log(soma(1,2,3,4,5))

