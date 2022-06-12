const express = require("express");
const router = express.Router();

const { createUsers, getUsers } = require('../controllers/usersController');

// POST
router.post('/createUsers', createUsers);//POST to mongodb template
// GET
router.get('/getUsers', getUsers);
// PATCH

// DELETE

module.exports = router;