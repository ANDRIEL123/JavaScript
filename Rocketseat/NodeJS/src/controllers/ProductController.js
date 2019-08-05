const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    //BUSCAR TODOS
    async index(req, res) {
        const products = await Product.paginate({}, { page: 1, limit: 10 }) //UTILIZANDO PAGINAÇÃO

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
    },

    //ATUALIZAR PRODUTO

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product)
    },

    //DELETA PRODUTO
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}