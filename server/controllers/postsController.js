// MODELS
const postDbModel = require('../models/Posts')

// GET
exports.getPosts = async (req, res) => {
    postDbModel.find().then(data => res.json(data))
    .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
};

// exports.getPostByID = async (req, res) => {
//     postDbModel.find().then(data => res.json(data))
//     .catch(err => res.status(404).json({ nodatafound: 'No data found' }));
// };

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

// DELETE
