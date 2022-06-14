const mongoose = require('mongoose');

const chatsSchema = new mongoose.Schema({
    ID: {
        type: Number,
        unique: true,
        required: true
    },
    User1ID: {
        type: Number,
        unique: true,
        required: true
    },
    User2ID: {
        type: Number,
        unique: true,
        required: true
    },
    Content: [{
        type: String,
        unique: true,
        required: false
    }]
});

module.exports = mongoose.model('Chats', chatsSchema);