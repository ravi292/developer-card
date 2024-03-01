//Nope!!! That's not working...

const express = require("express");
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
//const session = require('express-session');

mongoose.connect('YOUR MongoDB URL')
    .then(()=> { console.log("Connection Successful"); })
    .catch(() => { console.log("ERROR!!! in MONGO CONNECTION")})

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
//app.use(passport.session())
const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}
passport.use(new JwtStrategy(opts, User.authenticate));
//    try{
//     const user = await User.findOne({username : jwt_payload.username})
//        if (user) {
//            return done(null, user);
//        } else {
//            return done(null, false);
//        }
//    }
//    catch(err) {
//        return done(err, false);
//    }
//    
//}));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async function(req, res) {
    const { username, password, name } = req.body;
    const user = new User( { username, name });
    const registeredUser = await User.register(user, password)
    req.login(registeredUser, (err) => {
        if(err) {
            return res.send(err)
        }
        res.redirect('/profile')
    });
})

app.get('/signin', (req, res) => {
    res.render('signin')
})

app.post("/signin", async function(req, res) {
    req.login(req.body, (err) => {
        if(err) {
            return res.send(err)
        }
        res.redirect('/profile')
    });
})

app.get('/profile', passport.authenticate('jwt', { session: false }), function(req, res) {
    res.send(req.user);
})

app.get("/users", passport.authenticate('jwt', { session: false }), async function (req, res) {
    const username = req.user.username;
    const allUsers = await User.find({ username : { $ne : username }})
    res.json(allUsers);
});

app.listen(3000)
