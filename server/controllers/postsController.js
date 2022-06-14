// MODELS
const postDbModel = require('../models/Posts')

// GET
exports.getPosts = async (req, res) => {
    postDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

exports.getPostByID = async (req, res) => {
    postDbModel.findById(req.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// CREATE
exports.createPost = async (req, res) => {
    const post = new postDbModel(req.body);
    await post.save().then(() => {
        res.status(200).json({ post });
    }).catch((err) => {
        res.status(400).json({ msg: err });
    })
};

// UPDATE
exports.updatePostByID = async (req, res) => {
    postDbModel.findByIdAndUpdate(req.body.id, res.body).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};
// DELETE
exports.deletePostByID = async (req, res) => {
    postDbModel.findByIdAndDelete(req.body.id).then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};