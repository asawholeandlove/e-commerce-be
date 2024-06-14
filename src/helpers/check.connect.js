const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECOND = 5000;

// count connection
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections::${numConnection}`);
};

// check over load
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCores * 5;
    if (numConnection > maxConnections) {
      console.log(`Overload ${numConnection} connections`);
    }
  }, _SECOND);
};

module.exports = { countConnect, checkOverload };
