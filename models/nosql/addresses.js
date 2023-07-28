const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    calle: {
      type: String,
      required: true,
    },
    numInt: {
      type: String,
    },
    numExt: {
      type: String,
      required: true,
    },
    colonia: {
      type: String,
      required: true,
    },
    municipio: {
      type: String,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = {
  addressesModel: mongoose.model("adresses", AddressSchema),
  AddressSchema: AddressSchema,
};
