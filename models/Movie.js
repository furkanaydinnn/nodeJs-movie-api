const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        maxlength: 15,
        minlength: 3
    },
    category: {
        type: String,
        maxlength: 30,
        minlength: 3
    },
    country: {
        type: String,
        maxlength: 30,
        minlength: 3
    },
    year: {
        type: Number,
        max: 2500,
        min: 1800
    },
    imdb_score: {
        type: Number,
        max: 10,
        min: 0
    },
    createdIn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('movie',MovieSchema);