const express = require('express')
const flash = require('express-flash')
const app = express()
const path = require("path")
const config = require("./app/config.js")
const chalk = require('chalk')
const bodyParser = require('body-parser')


var session = require('express-session')
const mongoose = require('mongoose')
mongoose.connect(
    config.mongodbConnectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log(chalk.blue('Connected to Database!'));
});



app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')


app.use(session({
    secret: config.appKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}))
app.use(flash());
// permet de renvoyer les sessions à la vue
app.use((req, res, next) => {
    res.locals.session = req.session;
    // console.log(res.locals.session);
    next();
});
require('./app/passport')(app)


require("./app/routes.js")(app)

app.listen(config.port, () => {
    console.log(`Le serveur est en écoute à l'adresse : http://127.0.0.1:${config.port}`)
})