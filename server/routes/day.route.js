const express = require("express");
const router = express.Router();
const controller = require("../controllers/day.controller.js");


router.post('/day', controller.add_day);

module.exports = router;
