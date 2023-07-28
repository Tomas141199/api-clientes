const express = require("express");
const router = express.Router();
const { getItems } = require("../controllers/clients");

/**
 * Get all clients
 * @openapi
 * /clients:
 *    get:
 *      tags:
 *        - clients
 *      summary: "Listar clientes"
 *      description: Obten las lista completa de clientes
 *      responses:
 *        '200':
 *          description: Retorna la lista de clientes registrados.
 *          content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/client'
 *        '404':
 *          description: Error.
 */
router.get("/", getItems);

module.exports = router;
