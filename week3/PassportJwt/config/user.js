const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/passportDemo').then(() => console.log("Connected!!"));

const userSchema = new mongoose.Schema({
    username: String,
    password : String,
})

module.exports = mongoose.model('User', userSchema);
