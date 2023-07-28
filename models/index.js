const { adressesModel } = require("./nosql/addresses");
const { clientsModel } = require("./nosql/clients");

const models = {
  clientsModel,
  adressesModel,
};

module.exports = models;
