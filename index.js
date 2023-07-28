const cors = require("cors");
require("dotenv").config();
const express = require("express");

const dbConnectNoSql = require("./config/mongoDb");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * ENV vars
 */
const PORT = process.env.PORT || 4000;

/**
 * API Documentation
 */

/**
 * Invoke routes
 */
app.use("/api", require("./routes"));

app.listen(PORT);

dbConnectNoSql();

module.exports = app;
