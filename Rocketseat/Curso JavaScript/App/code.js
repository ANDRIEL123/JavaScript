var listaElement = document.querySelector('#app ul')
var inputElement = document.querySelector('input#inputadd')
var buttonElement = document.querySelector('input#adiciona')

var todos = JSON.parse(localStorage.getItem('list_todos'))

function atualizaLista () {
    listaElement.innerHTML = ''
    for (i = 0; i < todos.length; i++) {
        var outputLista = document.createElement('output')
        outputLista.innerHTML = `<li> ${todos[i]}</li>`

        var linkElement = document.createElement('a')
        var linkText = document.createTextNode('Excluir')
        linkElement.setAttribute('href', '#')


        linkElement.onclick = function () {
            todos.splice(linkElement, 1)
            atualizaLista()
        }

        linkElement.appendChild(linkText)

        listaElement.appendChild(outputLista)

        listaElement.appendChild(linkElement)
        saveToStorage()
    }
}

buttonElement.onclick =  function  () {
    listaElement.innerHTML = ''
    let input = document.getElementById('inputadd').value
    
    todos.push(input)
    inputElement.value = ''
    atualizaLista ()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}