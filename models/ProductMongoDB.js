const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    image: {
        type: String
    },


    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', ProductSchema); // User devient users à la création de la collection