const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.08tw0.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Err: ${err.message} in connection with Database.`);
  }
};

module.exports = connectDB;
