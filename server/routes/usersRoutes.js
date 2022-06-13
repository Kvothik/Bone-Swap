const express = require("express");
const router = express.Router();

const { createUsers, getUser } = require('../controllers/usersController');

// POST
router.post('/createUsers', createUsers);//POST to mongodb template
// GET
router.get('/getUser', getUser);
// PATCH

// DELETE

module.exports = router;