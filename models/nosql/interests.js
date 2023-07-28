const mongoose = require("mongoose");

const InterestsSchema = new mongoose.Schema(
  {
    intersPers: {
      type: String,
    },
    destinosPref: {
      type: String,
    },
    tipoHab: {
      type: String,
      required: true,
    },
    ingresoMensual: {
      type: String,
      required: true,
    },
    viajesAnuales: {
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
  interestsModel: mongoose.model("interests", InterestsSchema),
  InterestsSchema: InterestsSchema,
};
