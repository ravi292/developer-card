const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('./config/user');
const cookieParser = require('cookie-parser')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.json());
app.use(express.urlencoded( {extended: true }));
app.use(cors())
app.use(cookieParser('secret'))
app.use(passport.initialize())
require('./config/passport');

app.use((req, res, next) => {
    if(req.signedCookies.uid){
        req.headers.authorization = req.signedCookies.uid;
    }
    next();
})
 
app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
    })

    user.save().then((user) => {
        res.send({
            success: true,
            message: "Registered the User",
            user : {
                username: user.username,
                id: user._id
            }
        })
    })
    .catch((err) => {
        res.send({
            success: false,
            message: "Something went wrong",
            error: err
        })
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username }).then( user => {
        if(!user) {
            return res.status(401).send({
                success: false,
                message: "Could not find user",
            })
        }
        if(!bcrypt.compareSync(req.body.password, user.password )){
            return res.status(401).send({
                success: false,
                message: "Incorrect password",
            })
        }

        const payload = {
            username: user.username,
            id: user._id
        }

        const token = jwt.sign(payload, 'secret', { expiresIn: '1d'} )
        res.cookie('uid', `Bearer ${token}`, { signed: true });
        return res.status(200).send({
            success: true,
            message: "Logged in successfully",
            token: "Bearer " + token
        })
    })
})

app.get('/profile', passport.authenticate('jwt', {session: false }), (req, res) => {
    return res.send( req.user.username )
})

app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send({
        success: true,
        user: {
            id: req.user._id,
            username: req.user.username,
        }
    })
})

app.listen(3000);
