const { matchedData } = require("express-validator");
const { clientsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Get items clients from the DB
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await clientsModel.find();
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_GET_ITEMS");
  }
};

/**
 * Insert a new item
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await clientsModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_CREATE_ITEMS");
  }
};

/**
 * Update a item
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    const { id: _id, ...body } = matchedData(req);
    const data = await clientsModel.findOneAndUpdate({ _id }, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_UPDATE_ITEM");
  }
};

/**
 * Delete an item
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const { id } = body;
    const data = await clientsModel.findByIdAndDelete({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};

module.exports = {
  getItems,
  createItem,
  updateItem,
  deleteItem,
};
