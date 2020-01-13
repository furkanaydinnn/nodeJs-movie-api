const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    surname: {
        type: String,
        required: true,
        maxlength: 30,
        minlength: 3
    },
    bio: {
        type: String,
        maxlength: 100,
        minlength: 10
    },
    createdIn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('director',DirectorSchema);