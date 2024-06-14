const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:12345@e-commerce.hwqhbrn.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce"
  )
  .then(() => {
    console.log("MongoDB connected");
  });

module.exports = mongoose;
