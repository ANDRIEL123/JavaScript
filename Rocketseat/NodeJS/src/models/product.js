const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate') // PAGA PAGINAÇÃO DAS PAGINAS

// CRIO UM MOLDE QUE DEFINE AS PROPRIEDADES DOS PRODUTOS
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

// DEFINO UM PLUGIN COM MONGOOSEPAGINATE

ProductSchema.plugin(mongoosePaginate)

//DEFINO UM MODEL PRODUTO COM AS PROPRIEDADES PRODUCTSCHEMA
mongoose.model('Product', ProductSchema)