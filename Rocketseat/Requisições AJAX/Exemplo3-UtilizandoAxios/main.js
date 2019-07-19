
function preencheCampos (json) {
    console.log(json.login)
    document.querySelector('input#id').value = json.id
    document.querySelector('input#login').value = json.login
    
}

axios.get('https://api.github.com/users/andriel123')
 .then(function(response) {
     console.log(response)
     preencheCampos(response.data)
     
 })
.catch(function(error) {
    console.warn(error);
    
})

