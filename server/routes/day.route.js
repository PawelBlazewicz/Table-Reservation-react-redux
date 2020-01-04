const express = require("express");
const router = express.Router();
const controller = require("../controllers/day.controller.js");
const email = require("./../controllers/email.controller")

router.post('/day', controller.addDay);

router.get('/reservations/:date', controller.getReservations);

router.post('/reservations/', controller.addReservations, email.sendDone);

module.exports = router;