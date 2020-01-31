module.exports = class Register {

    printForm(request, response) {
        response.render('connexion')
    }

    async process(request, response) {

        let UserSchemaModel = require('../models/User.js')
        let User = new UserSchemaModel()
        if (request.body.email != "" && request.body.password != "") {
            let userConnected = await User.connect(request.body.email, request.body.password);


            // console.log(userConnected)
            if (userConnected) {
                request.session.user = {
                    id: userConnected._id,
                    lastname: userConnected.lastname,
                    firstname: userConnected.firstname,
                    email: userConnected.email,
                    civility: userConnected.civility
                }
                // flashbag
                request.flash('info', 'Vous êtes bien connecté !!');
                response.redirect('/')
            } else {
                request.flash('info', 'Erreur de connexion !!');
                response.render('connexion')
            }


        } else {
            response.render('connexion', {
                err: 'Il y a des des champs vides'
            })
        }
    }
}