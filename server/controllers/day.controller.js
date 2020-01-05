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
  console.log(req.params.date);
  Day.find({ date: req.params.date })
    .exec()
    .then(day => {
      res.send(day[0]);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.addReservations = function(req, res, next) {
  Day.find({ date: req.body.date })
    .exec()
    .then(day => {
      day = day[0];
      const table = new Table({
        time: req.body.time,
        table: req.body.table,
        email: req.body.email,
        message: req.body.message,
      });

      if(day.reservations.some( d => d.time === table.time && d.table === table.table)) {
        res.send("Already Reserved");
      }

      day.reservations.push(table);
      day.save();
      next();
    })
    .catch(err => {
      console.log(err);
    });
};
