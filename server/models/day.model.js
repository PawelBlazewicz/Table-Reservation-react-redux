const mongoose = require("mongoose");
const TableSchema = require("./table.model");
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  date: { type: String, required: true, unique: true, max: 20 },
  reservations: [TableSchema],
});

module.exports = mongoose.model("Day", ReservationSchema);
