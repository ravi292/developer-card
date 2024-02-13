const mongoose = require("mongoose");

async function dbConnector(url){
    try{
        await mongoose.connect(url);
        console.log("Mongo connected succesfully");
    }
    catch(error){
        console.log("Mongo connection failed");
        console.log(error);
    }
}

module.exports = {
    dbConnector,
}