let myObj = {
    init: function () {
        console.log('andriel')
    }
}

myObj.init();
const recebe = myObj.init.bind(myObj)
recebe()