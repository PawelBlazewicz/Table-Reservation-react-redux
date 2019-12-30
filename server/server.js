const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const config = require("config");
const path = require("path");
const day = require("./routes/day.route.js");

const app = express();
app.use(cors());

const dbRoute = config.get("dbRoute");

mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/", day);
app.use(express.static(path.resolve("../client/public")));
app.get("/*", function(req, res) {
  res.sendFile(path.resolve("../client/public/index.html"));
});

const API_PORT = 3001;
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
