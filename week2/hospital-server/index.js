const express = require('express');
const app = express()

app.use(express.json());

let users = [{
    name: "John",
    kidneys: [
        {
        healthy: false
        }, 
        {
            healthy: false
        }
    ]
}]

app.get('/', (req, res) => {
   const johnKidneys = users[0].kidneys; 
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    let numberOfUnhealthyKidneys = 0;
    for(let kidney of johnKidneys){
        if(kidney.healthy){
            numberOfHealthyKidneys++;
        }
    }
    numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys, 
        numberOfHealthyKidneys, 
        numberOfUnhealthyKidneys
    })
})

app.post('/', (req, res) => {
    const {isHealthy} = req.body;
    users[0].kidneys.push({
        healthy: isHealthy 
    })

    res.json({
        msg: "DONE!!"
    })
})


app.put('/', (req, res) => {
    if(hasUnhealthyKidney()){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
    }
    else{
        res.status(411).json({
            msg: "you do not have any bad kidney"
        })
    }
})

app.delete('/', (req, res) => {
    if(hasUnhealthyKidney()){
        let newKidneys = [];
        for(let kidney of users[0].kidneys){
            if(kidney.healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            msg: "DONE"
        })
    }
    else{
        res.status(411).json({
            msg: "You have no bad kidney"
        })
    }
})

function hasUnhealthyKidney(){
    let atLeastOneUnhealthyKidney = false;

    for(let kidney of users[0].kidneys){
        if(!kidney.healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }

    return atLeastOneUnhealthyKidney;
}
app.listen(3000)
