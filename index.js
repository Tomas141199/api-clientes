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
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

/**
 * Invoke routes
 */
app.use("/api", require("./routes"));

if (NODE_ENV !== "test") app.listen(PORT);

dbConnectNoSql();

module.exports = app;
