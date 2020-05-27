async function consulta() {
    let user = document.getElementById("user").value
    const response = await axios.get(`https://api.github.com/users/${user}`)
    const data = response.data
    const div = document.getElementById("dados")

    div.innerHTML = `<div>
                        <h2>Dados do usuário</h2>
                        <p>Login = <b>${data.login}</b></p>
                        <p>Nome = <b>${data.name}</b></p>
                        <p>Bio = <b>${data.bio}</b></p>
                        <p>Localização = <b>${data.location}</b></p>
                    </div>`
    div.style.backgroundColor = "rgb(131,111,255)"

    console.log(response.data)
}