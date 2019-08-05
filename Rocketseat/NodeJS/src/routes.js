const express = require('express')
const routes = express.Router()

const ProductController = require('./controllers/ProductController')


routes.get('/products', ProductController.index) //ROTA DE BUSCA ENDERECO http://localhost:3001/api/products
routes.get('/products/:id', ProductController.show) //ROTA PARA BUSCAR 1 REGISTRO 
routes.post('/products', ProductController.store) //ROTA PARA CRIAR NOVO PRODUTO
routes.put('/products/:id', ProductController.update) //ROTA PARA ATUALIZAR O PRODUTO
routes.delete('/products/:id', ProductController.destroy) //ROTA PARA DELETAR O PRODUTO

module.exports = routes