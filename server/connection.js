const mongoose = require("mongoose");

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URL);
  if (connection.STATES.uninitialized) {
    console.log("Database is not connected");
  }
  if (connection.STATES.connecting) {
    console.log("Database is conneting....");
  }
  if (connection.STATES.connected) {
    console.log("Database is Connected....");
  }

  if (connection.STATES.disconnected) {
    console.log("Database is disconnected....");
  }
};

module.exports = { connectDb };