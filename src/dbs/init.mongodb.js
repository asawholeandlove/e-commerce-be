const mongoose = require("mongoose");

const { countConnect } = require("../helpers/check.connect");

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", {
        color: true,
      });
    }

    mongoose
      .connect(
        "mongodb+srv://admin:12345@e-commerce.hwqhbrn.mongodb.net/?retryWrites=true&w=majority&appName=e-commerce"
      )
      .then(() => {
        console.log("MongoDB connected");
        countConnect();
      });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
