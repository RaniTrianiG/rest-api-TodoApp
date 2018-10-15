const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
});

const Heroes = mongoose.model('heroes', HeroesSchema);

module.exports = Heroes;