require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
const { checkOverload } = require("./helpers/check.connect");
checkOverload();

// init routes

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the API",
    metadata: "Hello nè".repeat(10),
  });
});

// handle error

module.exports = app;
