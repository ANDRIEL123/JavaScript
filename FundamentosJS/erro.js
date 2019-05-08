function imprimirNomeGritado(obj) {
    try{
    console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) {
        console.log("Erro: " + e);
    }
}

const obj = {name: "Andriel"}
imprimirNomeGritado(obj)