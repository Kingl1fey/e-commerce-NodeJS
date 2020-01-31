module.exports = (app) => {

    app.get('/', (req, res) => {
        let Controller = require("../controllers/Home.js")
        let Home = new Controller()
        // console.log(req.session.user)
        Home.print(req, res)
    })

    app.get('/register', (req, res) => {
        let Controller = require("../controllers/Register.js")
        let Register = new Controller()
        Register.printForm(req, res)
    })

    app.post('/register', (req, res) => {
        let Controller = require("../controllers/Register.js")
        let Register = new Controller()
        Register.process(req, res)
    })
    app.get('/connexion', (req, res) => {
        let Controller = require("../controllers/Sign_in.js")
        let SignIn = new Controller()
        SignIn.printForm(req, res)
    })
    app.post('/connexion', (req, res) => {
        let Controller = require("../controllers/Sign_in.js")
        let SignIn = new Controller()
        SignIn.process(req, res)
    })
    app.get('/disconnect', (req, res) => {
        let Controller = require("../controllers/Disconnect.js")
        let Home = new Controller()
        // console.log(req.session.user)
        Home.print(req, res)
    })
}