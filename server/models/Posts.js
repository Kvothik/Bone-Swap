const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    UserID: {
        type: Number,
        unique: false,
        required: true
    },
    TextBody: {
        type: String,
        unique: false,
        required: true
    },
    ImageUrl: {
        type: String,
        unique: false,
        required: false
    },
    DTG: {
        type: String,
        unique: false,
        required: false
    }
});

module.exports = mongoose.model('Posts', postsSchema);