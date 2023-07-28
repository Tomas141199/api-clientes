const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateItem = [
  check("nombre").exists().notEmpty(),
  check("app").exists().notEmpty(),
  check("apm").exists().notEmpty(),
  check("edad").exists().notEmpty(),
  check("direccion.calle").exists().notEmpty(),
  check("direccion.numExt").exists().notEmpty(),
  check("direccion.colonia").exists().notEmpty(),
  check("direccion.municipio").exists().notEmpty(),
  check("direccion.estado").exists().notEmpty(),
  check("interesesParticulares.intersPers").exists().notEmpty(),
  check("interesesParticulares.destinosPref").exists().notEmpty(),
  check("interesesParticulares.tipoHab").exists().notEmpty(),
  check("interesesParticulares.ingresoMensual").exists().notEmpty(),
  check("interesesParticulares.viajesAnuales").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [
  check("id").exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validatorCreateItem, validatorGetItem };
