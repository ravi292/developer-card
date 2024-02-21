const { default: Axios } = require("axios");

const   express = require("express"),
        router = express.Router(),
        Event= require("../models/event"),
        axios=require("axios");

router.get("/Event/new",isLoggedIn,(req,res)=>{
    res.render("newEvent");
})
router.post("/movies",(req,res)=>{
    var movie=req.body.search;
    axios.get('http://www.omdbapi.com/?s='+movie+'&apikey=thewdb')
    .then((response)=>{
        var data=response.data.Search;
        Event.find({name : req.body.search},(err,allCampground)=>{
            if(err) console.log("Error in Database");
            else {
                var data2= allCampground;
                res.render("movies",{data:data,data2:data2});
            }
        })
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{})
})

router.post("/Event",isLoggedIn,(req,res)=>{
    var newEvent = {
        name: req.body.eventName,
        image: req.body.poster,
        description: req.body.description,
        date: req.body.date,
        author :{
            id: req.user._id,
            username: req.user.username,
        }
    }
    Event.create(newEvent,(err,event)=>{
        if(err) console.log("Error");
        else{
            res.redirect("/");
        }
    })
})


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect("/login");
}
module.exports = router;
