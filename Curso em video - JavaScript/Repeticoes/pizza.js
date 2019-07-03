let fatias = 10

function comerFatia() {
    return fatias -= 1
}

function comerPizza() {
    while(fatias) {
        fatias = comerFatia()
        console.log(fatias)
    }
}

comerPizza()
