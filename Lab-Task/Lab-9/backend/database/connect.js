const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("DataBase connected");
    })
    .catch(() => {
      console.log("Error-- database not connected");
    });
};

module.exports = database
