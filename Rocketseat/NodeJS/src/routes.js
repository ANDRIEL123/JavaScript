const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    /*Product.create({
        title: 'React Native',
        description: 'TESTE NODE',
        url: 'gamemaster.netlify.com'

    })*/
    return res.send('Hello World 2!')
})

module.exports = routes