const   express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        axios=require("axios"),
        mongoose= require("mongoose"),
        passport = require("passport"),
        LocalStrategy = require("passport-local"),
        passportLocalMongoose = require("passport-local-mongoose"),
        User = require("./models/user"),
        Event = require("./models/event"),
        Review = require("./models/review"),
        indexRoute= require("./routes/index"),
        eventRoute= require("./routes/event"),
        reviewRoute= require("./routes/review");
const { Console } = require('console');
require("dotenv").config()
mongoose.connect(process.env.DatabaseURL, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(require("express-session")({
    secret:"Dont you dare",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req,res,next){
    res.locals.currentUser =req.user;
    next();
});
app.use(indexRoute);
app.use(eventRoute);
app.use(reviewRoute);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});