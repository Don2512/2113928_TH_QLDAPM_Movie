const express = require("express");
const router = express.Router();

const MovieController = require("../Controller/movieController");





router.get('/movie/allListMovie',MovieController.apiAllListMovie);


module.exports = router;