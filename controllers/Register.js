module.exports = class Register {

    printForm(request, response) {
        response.render('register')
    }

    async process(request, response) {


        let UserSchemaModel = require('../models/User.js')
        let User = new UserSchemaModel()

        if (request.body.email != "" && request.body.lastName != "" && request.body.firstName != "" && request.body.password != "" && request.body.password2 != "") {

            let emailExists = await User.emailExists(request.body.email);
            if (emailExists) {
                request.flash('info', 'Email déjà existante !!');
                response.render('register', {
                    form: request.body,

                })
                return;

            }

            if (request.body.password.length > 2 && request.body.password == request.body.password2) {

                // UserSchemaModel.find({
                //     name: request.body.email
                // }, callback);

                User.add(
                    request.body.civility,
                    request.body.lastName,
                    request.body.firstName,
                    request.body.email,
                    request.body.password
                )

                request.flash('info', 'Vous êtes correctement enregisté !!');
                response.render('home')
            } else {
                request.flash('info', 'Les mots de passe ne correspondent pas !!');
                response.render('register')
            }

        } else {
            request.flash('info', 'Il y a des des champs vides !!');
            response.render('register')
        }

    }
}