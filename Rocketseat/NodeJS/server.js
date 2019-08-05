const express = require('express') //TEM QUE SER INSTALADO COM NPM INSTALL EXPRESS
const mongoose = require('mongoose') //TEM QUER SER INSTALADO COM NPM INSTALL MONGOOSE
const requireDir = require('require-dir') //TEM QUE SER INSTALADO COM NPM INSTALL REQUIRE-DIR

// Iniciando o App
const app = express()

app.use(express.json()) //DEFINO QUE O APP PODE EXPORTAR REGISTRO JSON = JAVASCRIPT OBJECT NOTATION

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

requireDir("./src/models") //ATUALIZA OS MODELS

// Rotas
app.use('/api', require("./src/routes")) //DEFINO O LOCAL COMO http://localhost:3001/api/

app.listen(3001)

