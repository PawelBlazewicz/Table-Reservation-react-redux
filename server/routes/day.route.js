const express = require("express");
const router = express.Router();
const controller = require("../controllers/day.controller.js");

router.post('/day', controller.addDay);

router.get('/reservations/:date', controller.getReservations);

router.post('/reservations/', controller.addReservations);

module.exports = router;