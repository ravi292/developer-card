const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "shhhhh";

mongoose.connect(
    "YOUR MONGODB CONNECTION STRING"
).then(() => {
    console.log("CONNECTED")
});

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existUser = await User.findOne({username})
    if(existUser){
        return res.json({
            msg: "USER ALREADY EXIST"
        })
    }
    const newUser = new User({
        name : name, 
        username: username, 
        password: password
    })

    await newUser.save();

    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
        token,
    });

});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username;
      console.log(username);
      const allUsers = await User.find({ username: {$ne : username}});
      res.json(allUsers);
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
