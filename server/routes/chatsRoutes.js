const express = require("express");
const router = express.Router();

const { createChat, getChats, getChatByID, updateChatByID, deleteChatByID } = require('../controllers/chatsController');

// POST
router.post('/createChat', createChat);//POST to mongodb template
// GET
router.get('/getAllChats', getChats);
router.get('/getChatByID', getChatByID);
// UPDATE
router.patch('/updateChatByID', updateChatByID);
// DELETE
router.delete('/deleteChatByID', deleteChatByID);

module.exports = router;