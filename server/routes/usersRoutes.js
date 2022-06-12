const express = require("express");
const router = express.Router();

const { addUsers, getUsers } = require('../controllers/usersController');

// POST
router.post('/addUsers', addUsers);//POST to mongodb template
// GET
router.get('/getUser', getUsers);
// PATCH

// DELETE

module.exports = router;