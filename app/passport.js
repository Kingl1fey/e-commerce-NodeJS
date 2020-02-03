const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = (app) => {

    app.use(passport.initialize())
    app.use(passport.session())

    passport.use(new GoogleStrategy({
            clientID: "132835379836-q1o3v33udpnuiqe2ool9h1v2gq1vt05s.apps.googleusercontent.com",
            clientSecret: "r1zYY4ZP7vFC0ndnDqLxVIX2",
            callbackURL: "/connexion/google/callback",
            passReqToCallback: true
        },
        (request, accessToken, refreshToken, profile, done) => {
            // exemple d'utilisation de request
            // console.log(profile)
            request.session.user = {
                connected: true,
                id: profile.id,
                firstname: profile.name.givenName,
                lastname: profile.name.familyName
            }
            request.flash('info', 'Vous êtes bien connecté !!');
            return done(null, request.session.user);
        }

    ));


    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    });

    passport.deserializeUser((id, cb) => {

        cb(null, {})

    });
}