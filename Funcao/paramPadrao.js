function soma1(a, b, c) {
    a = a || 1
    b = b || 2
    c = c || 3
    return a + b + c
}

console.log(soma1() , soma1(3))

//USAR ESSA FUNÇÃO DO ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(3,5,4))