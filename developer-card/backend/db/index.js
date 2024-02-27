const mongoose = require('mongoose');
if(process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const db_url = process.env.DB_URL
mongoose.connect(db_url)
    .then(() => console.log('Connected to DataBase'))
    .catch((err) => console.log(`ERROR CONNECTING TO DATABASE:${err}`));

const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: String,
    gituser : String,
    imgUrl : String,
    socials: [
        {
            social: String,
            url: String
        }
    ]
})

module.exports = mongoose.model('Card', cardSchema);