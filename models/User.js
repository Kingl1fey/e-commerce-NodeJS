const UserMongo = require('./UserMongoDB.js')


module.exports = class User {

    add(civility, lastname, firstname, email, password) {

        let hash = require('crypto').createHash('sha1').update(password).digest('hex')
        UserMongo.create({
            civility,
            lastname,
            firstname,
            email,
            password: hash
        })

    }
    emailExists(email) {
        return new Promise((resolve, rejected) => {
            // On recherche l'email


            UserMongo.findOne({
                email
            }).exec((err, user) => {
                // Si il y a une erreur (pas de résultat)
                if (err !== null || user === null) resolve(false);
                resolve(true);
            })
        })
    }
    connect(email, password) {
        let hash = require('crypto').createHash('sha1').update(password).digest('hex')
        return new Promise((resolve, rejected) => {
            // On recherche l'email
            UserMongo.findOne({
                email,
                password: hash
            }).exec((err, user) => {
                // Si il y a une erreur (pas de résultat)
                if (err !== null || user === null) resolve(false);
                resolve(user);
            })
        })
    }

}