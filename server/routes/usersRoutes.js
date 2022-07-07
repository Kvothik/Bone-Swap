const express = require("express");
const router = express.Router();

const { createUser, getUsers, getCurrentUser, updateUserByID, deleteUserByID, getUserByID } = require('../controllers/usersController');

// POST
router.post('/createUser', createUser);//POST to mongodb template
// GET
router.get('/getAllUsers', getUsers);
// GET BY ID
router.get('/getCurrentUser', getCurrentUser);
router.get("/getUserByID/:id", getUserByID);
// UPDATE
router.patch('/updateUserByID', updateUserByID);
// DELETE
router.delete('/deleteUserByID', deleteUserByID);

module.exports = router;