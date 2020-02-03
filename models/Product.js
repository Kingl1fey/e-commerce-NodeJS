const ProductMongo = require('./ProductMongoDB.js')


module.exports = class Product {

    add(name, description, price, quantity, image) {

        ProductMongo.create({
            name,
            description,
            price,
            quantity,
            image

        })

    }
    get() {
        return new Promise((resolve, rejected) => {
            ProductMongo.find().limit(20).exec((err, product) => {

                if (err !== null || product === null) resolve(false);
                resolve(product);
            })
        })
    }



}