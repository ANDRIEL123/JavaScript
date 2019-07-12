function fatorial (n) {
    var aux = n;
    n -= 1;
    for ( ;n > 1; n--) {
        aux *= n
    }
    return aux;
}

console.log(fatorial(5))


//5 x 4 x 3 x 2
//6