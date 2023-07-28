const express = require("express");
const router = express.Router();
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/clients");
const {
  getItems,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/clients");

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

/**
 * Register a new client
 * @openapi
 * /clients:
 *    post:
 *      tags:
 *        - clients
 *      summary: "Registrar nuevo cliente"
 *      description: Registra un nuevo clienta y retorna el detalle del registro
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/client"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con estado '201'
 *      '404':
 *        description: Algo salió mal'
 */
router.post("/register", validatorCreateItem, createItem);

/**
 * Update client
 * @openapi
 * /clients/{id}:
 *    put:
 *      tags:
 *        - clients
 *      summary: "Actualizar cliente"
 *      description: Actualiza la información del cliente y retorna el detalle del registro
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID del cliente a actualizar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto actualizado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: "#/components/schemas/client"
 *    responses:
 *      '201':
 *        description: Retorna el objeto insertado en la coleccion con stado '201'
 *        content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/client'
 *      '403':
 *        description: No tiene permisos '403'
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Delete client
 * @openapi
 * /clients/{id}:
 *    delete:
 *      tags:
 *        - clients
 *      summary: "Eliminar cliente"
 *      description: Elimiar el detalle de un cliente
 *      parameters:
 *      - name: id
 *        in: path
 *        description: ID del cliente a eliminar
 *        required: true
 *        schema:
 *          type: string
 *      responses:
 *        '200':
 *          description: Retorna el objeto del cliente.
 *        '422':
 *          description: Error de validacion.
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
