const swaggerJsdoc = require("swagger-jsdoc");

/**
 * {
    url: "https://staging.gigantic-server.com/v1",
    description: "Staging server"
 * }
 */

/**
 *  API Config Info
 */
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi API Curso de Node REST",
    version: "1.0.1",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
    {
      url: "",
    },
  ],
  components: {
    schemas: {
      client: {
        type: "object",
        required: ["name", "app", "apm", "edad"],
        properties: {
          name: {
            type: "string",
          },
          app: {
            type: "string",
          },
          apm: {
            type: "string",
          },
          edad: {
            type: "integer",
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;
