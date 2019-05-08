const array = []
let i, j;
let aux;
for (i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10));
}
    console.log(array);
    
for (i = 0; i < 10; i++) {
    for (j = 1; j < 10; j++) {
        if (array[i] > array[j]) {
            aux = array[i];
        } else {
            aux = array[j];
        }
    }
}
console.log("O maior valor da estrutura é: " + aux);

