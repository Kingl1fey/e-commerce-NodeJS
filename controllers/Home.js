const config = require("../app/config.js")

module.exports = class Home {
    print(request, response) {
        var ProductModel = require('../models/Product.js')
        var Product = new ProductModel()

        Product.get().then(products => {
            console.log(products)
            response.render('home', {
                products
            })
        })
    }
}