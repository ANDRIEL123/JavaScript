let array = []

for(let i = 0; i < 20; i++){
    array.push(Math.floor(Math.random() * 10));
}

console.log(array)

array.splice(0,10);

console.log(array)