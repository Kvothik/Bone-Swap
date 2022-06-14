const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    ID: {
        type: Number,
        unique: true,
        required: true
    },
    UserID: {
        type: Number,
        unique: true,
        required: true
    },
    TextBody: {
        type: String,
        unique: true,
        required: true
    },
    ImageUrl: {
        type: String,
        unique: true,
        required: false
    },
    DTG: {
        type: String,
        unique: true,
        required: false
    }
});

module.exports = mongoose.model('Posts', postsSchema);