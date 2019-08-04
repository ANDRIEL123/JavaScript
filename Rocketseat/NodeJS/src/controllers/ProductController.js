const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    //BUSCAR TODOS
    async index(req, res) {
        const products = await Product.find()

        return res.json(products)
    },

    // BUSCA PRODUTO ESPECÍFICO
    async show(req, res) {
        const product = await Product.findById(req.params.id)

        return res.json(product)

    },
    //CRIAR PRODUTO
    async store(req, res) {
        const product = await Product.create(req.body)

        return res.json(product)
    }
}