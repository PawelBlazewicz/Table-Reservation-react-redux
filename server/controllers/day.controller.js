const Day = require("../models/day.model.js");

exports.add_day = function(req, res) {
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
