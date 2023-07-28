const cors = require("cors");
require("dotenv").config();
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require("./docs/swagger");
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
 * API Documentation
 */
app.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(openApiConfiguration)
);

/**
 * Invoke routes
 */
app.use("/api", require("./routes"));

if (NODE_ENV !== "test") app.listen(PORT);

dbConnectNoSql();

module.exports = app;
