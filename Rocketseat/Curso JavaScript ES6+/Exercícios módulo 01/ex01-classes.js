class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin(adm) {
        if (adm.admin) { //VERIFICA SE É ADM
            console.log(`É Admin!`)
        } else {
            console.log('Não é admin!')
        }
    }
}

class Admin extends Usuario{ //CRIO CLASS ADM E DIGO QUE A CLASSE USUARIO É PAI
    constructor(email, senha) { //CHAMO O CONTRUTOR COM AS PROPRIEDADES DA CLASSE USUARIO
        super(email, senha) //CHAMO O SUPER PARA HERDAR AS PROPRIEDADES DA CLASSE PAI
        this.admin = true //DIGO QUE O USUARIO INSTANCIADO DESSA CLASSE É ADM
    }
}

adm = new Admin('andrielmaicom@hotmail.com','teste123') // CRIO USUARIO ADM
usuarioPadrao = new Usuario('runebrazuka@hotmail.com', 'teste2') // CRIO USUARIO PADRÃO SEM PERMISSÃO DE ADM


user = new Usuario()

console.log(`Email: ${adm.email}, Senha: ${adm.senha}`)
user.isAdmin(adm)
console.log(`Email: ${usuarioPadrao.email}, Senha: ${usuarioPadrao.senha}`)
user.isAdmin(user)