const Day = require("../models/day.model.js");
const mongoose = require("mongoose");
const TableSchema = require("../models/table.model.js");
const Table = mongoose.model("Table", TableSchema);

exports.addDay = function(req, res) {
  let day = new Day({
    date: req.body.date,
  });

  day.save(function(err) {
    if (err) {
      console.log(err);
    }
    res.send("New day Created successfully");
  });
};

exports.getReservations = function(req, res) {
  Day.find({ date: req.body.day })
    .exec()
    .then(day => {
      res.send(day);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addReservations = function(req, res) {
  Day.find({ date: req.body.day })
    .exec()
    .then(day => {
      const table = new Table({
        time: req.body.time,
        table: req.body.table,
        email: req.body.email,
        message: req.body.message,
      });
      day[0].reservations.push(table);
      day[0].save();
      res.send("Reservations done");
    })
    .catch(err => {
      console.log(err);
    });
};
