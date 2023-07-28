const mongoose = require("mongoose");
const { AddressSchema } = require("./addresses");
const { InterestsSchema } = require("./interests");

const ClientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    app: {
      type: String,
      required: true,
    },
    apm: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
    },
    sexo: String,
    direccion: AddressSchema,
    interesesParticulares: InterestsSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = {
  clientsModel: mongoose.model("clients", ClientSchema),
  ClientSchema: AddressSchema,
};
