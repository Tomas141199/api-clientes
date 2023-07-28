const express = require("express");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require("./docs/swagger");

const app = express();

/**
 * ENV vars
 */
const PORT = 4000;

app.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(openApiConfiguration)
);

app.listen(PORT);

module.exports = app;
