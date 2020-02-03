var faker = require('faker');
const config = require("./app/config.js")
const mongoose = require('mongoose')
mongoose.connect(
    config.mongodbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

var ProductModel = require('./models/Product.js')
var Product = new ProductModel()

for (let i = 0; i < 1001; i++) {

    randomMath = Math.floor(Math.random() * 300);
    randomName = faker.commerce.productName();
    randomDescription = faker.random.words();
    randomPrice = faker.commerce.price();
    randomQty = faker.random.number();
    randomImage = 'https://picsum.photos/id/' + randomMath + '/1200/400';

    Product.add(
        randomName,
        randomDescription,
        randomPrice,
        randomQty,
        randomImage
    )
}
console.log(randomMath)
console.log(randomName)
console.log(randomDescription)
console.log(randomPrice)
console.log(randomQty)