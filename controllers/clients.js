const { matchedData } = require("express-validator");

/**
 * Get items clients from the DB
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  console.log("invocación");
  res.send({ test: "Successfully" });
};

module.exports = {
  getItems,
};
