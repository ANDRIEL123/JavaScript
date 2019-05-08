{ 
    { 
        { 
            var sera = "será??"  //declarado dentro do escopo
            console.log(sera)
        } 
    } 
}
console.log(sera) //var é visto mesmo fora do escopo;

function teste(){
    var local = 321
    console.log(local)
    //Variavel local so acessivel dentro da funcao
}