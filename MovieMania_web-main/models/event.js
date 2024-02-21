const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type:Date,
        default:Date.now
    },
    author: {
        id:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
        },
        username : String,
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
});

module.exports = mongoose.model("Event",eventSchema)