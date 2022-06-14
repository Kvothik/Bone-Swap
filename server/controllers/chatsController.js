// MODELS
const chatsDbModel = require('../models/Chats')

// GET
exports.getChats = async (req, res) => {
    chatsDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

exports.getChatByID = async (req, res) => {
    chatsDbModel.findById(req.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// CREATE
exports.createChat = async (req, res) => {
    const post = new chatsDbModel(req.body);
    await post.save().then(() => {
        res.status(200).json({ post });
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};

// UPDATE
exports.updateChatByID = async (req, res) => {
    chatsDbModel.findByIdAndUpdate(req.body.id, res.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
// DELETE
exports.deleteChatByID = async (req, res) => {
    chatsDbModel.findByIdAndDelete(req.body.id).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};