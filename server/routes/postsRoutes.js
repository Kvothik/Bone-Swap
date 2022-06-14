const express = require("express");
const router = express.Router();

const { createPost, getPosts, getPostByID, updatePostByID, deletePostByID } = require('../controllers/postsController');

// POST
router.post('/createPost', createPost);//POST to mongodb template
// GET
router.get('/getAllPosts', getPosts);
router.get('/getPostByID', getPostByID);
// UPDATE
router.patch('/updatePostByID', updatePostByID);
// DELETE
router.delete('/deletePostByID', deletePostByID);

module.exports = router;