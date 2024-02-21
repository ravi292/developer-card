const   express = require("express"),
        router = express.Router(),
        User = require("../models/user"),
        passport = require("passport");

router.get("/",(req,res)=>{
    res.render("index");
});

//LOGIN
router.get("/login",(req,res)=>{
    res.render("login");
});
router.post("/login",passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/login",
}),(req,res)=>{
})

//SIGNUP NEW USER
router.get("/signup",(req,res)=>{
    res.render("signup");
});
router.post("/signup",(req,res)=>{
    User.register(new User({username: req.body.username}),req.body.password,(err,user)=>{
        if(err){
            console.log(err);
            res.redirect("/signup");
        }
        passport.authenticate("local")(req,res,()=>{
            res.redirect("/");
        })
    })
});


//LOGOUT USER
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})


module.exports = router;
