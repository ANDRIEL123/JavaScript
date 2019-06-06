function fatorial(num) {
    if(num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
        console.log(num * fatorial())
    }
}

console.log(fatorial(5))

function fatorial2(num) {
    let res = num
    for(;num > 1; num--) {
        res = res * (num - 1)
    }
    return res
}

console.log(fatorial2(5))