require("colors");

const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;

  mongoose
    .connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection MongoDB Successfully".bgGreen))
    .catch(() => console.log("Connection MongoDB Failed").bgRed);
};

module.exports = dbConnect;
