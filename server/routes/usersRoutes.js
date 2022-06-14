const express = require("express");
const router = express.Router();

const { createUsers, getUsers, getUserByID, updateUserByID, deleteUserByID } = require('../controllers/usersController');

// POST
router.post('/createUsers', createUsers);//POST to mongodb template
// GET
router.get('/getAllUsers', getUsers);


// GET BY ID
router.get('/getUserByID', getUserByID);
// UPDATE
router.patch('/updateUserByID', updateUserByID);
// DELETE
router.delete('/deleteUserByID', deleteUserByID);

module.exports = router;