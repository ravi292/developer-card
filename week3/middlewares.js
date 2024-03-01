const express = require("express");

const app = express();

const numberofrequests = 0;
const calculateRequests = function(req, res, next){
    numberofrequests++;
    console.log(numberofrequests);
    next();
}

app.use(express.json())

app.use(calculateRequests)

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "ravi" || password != "1234") {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Somethings up with your ionputs"})
    return
  }
  // do something with kidney here
  res.json({
    msg: "Your kidney is fine!"
  })
});

app.listen(3000);
