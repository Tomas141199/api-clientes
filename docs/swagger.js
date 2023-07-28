const swaggerJsdoc = require("swagger-jsdoc");

/**
 * {
    url: "https://clientes-4zyx.onrender.com/api/",
    description: "Staging server"
 * }
 */

/**
 *  API Config Info
 */
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentación sobre la api para la gestion de clientes",
    version: "1.0.1",
  },
  servers: [
    {
      url: "https://clientes-4zyx.onrender.com/api",
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
