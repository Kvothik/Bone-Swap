const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    ID: {
        type: Number,
        unique: true,
        required: true
    },
    Username: {
        type: String,
        unique: true,
        required: true
    },
    ProfilePicture: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    SecurityEnablement: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Users', usersSchema);