const array = [];
let i;

for (i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}

console.log(array);
console.log(parImpar(array));

function parImpar(array = []) {
    console.log("Impares e pares do array!")
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 && typeof array[i] != 'undefined') {
            console.log("Par: " + array[i]);
        } else {
            console.log("Impar: " + array[i]);
        }
    }
}

