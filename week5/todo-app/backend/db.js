const mongoose = require('mongoose');

mongoose.connect('<mongodbconnection string>')
    .then(() => {
        console.log('Connected To DataBase :)')
    })

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

module.exports = mongoose.model('Todo', todoSchema);
