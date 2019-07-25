var minhaPromise = function() {
    return new Promise(function(resolve, reject) {
        var numero = 15
        if (numero > 14) {
            resolve('Teste')
        } else {
            reject('Erro de retorno')
        }
    })
}

minhaPromise()
.then(function(response) {
    console.log(response)
})
.catch(function(error) {
    console.log(error)
})
