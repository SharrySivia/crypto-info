const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb://localhost:27017/cryptoinfo`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Err: ${err.message} in connection with Database.`);
  }
};

module.exports = connectDB;
