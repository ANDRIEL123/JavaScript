function pegaDataAtual(){
var data = new Date();
var dd = data.getDate();
var mm = data.getMonth() + 1;
var yyyy = data.getFullYear();
var today

if (dd < 10 && mm < 10){
    return today = "0" + dd + "/0" + mm + "/" + yyyy;
} else if(dd < 10){
    return today = "0" + dd + mm + "/" + yyyy;
} else if(mm < 10){
    return today = dd + "/0" + mm + "/" + yyyy;
} else{
    return today = dd + "/" + mm + "/" + yyyy;
    }
}

console.log(pegaDataAtual())