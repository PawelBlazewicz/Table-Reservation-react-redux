const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  time: { type: String, required: true },
  table: { type: String, required: true },
  date: { type: Date, default: Date.now },
  email: { type: String, required: true },
  message: { type: String },
});

module.exports = TableSchema;