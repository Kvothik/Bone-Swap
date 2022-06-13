const express = require("express");
const router = express.Router();

// Controllers
const { getTest } = require('../controllers/test');
const { getMerlin } = require('../controllers/test');
const { createTest } = require('../controllers/test');


// middlewares

// api routes
//CREATE
router.post('/createTest', createTest);
//DELETE

//UPDATEs

//GET
router.get('/test', getTest);
router.get('/merlin', getMerlin);

module.exports = router;