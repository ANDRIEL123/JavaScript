let array = [], arrayFormtado = []
let aux = 0;
let auxLoop = 0;
for (var i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 20));
}
console.log(array);

while (auxLoop < array.length) {
    for (i = 0; i < 20; i++) {
        if (array[i] > aux) {
            aux = array[i];
            array.splice(array[i], 1)
        }
    }
    auxLoop ++
}
console.log(array)