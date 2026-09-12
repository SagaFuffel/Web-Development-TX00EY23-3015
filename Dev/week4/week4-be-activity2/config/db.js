const mongoose = require("mongoose");

const connectDB = async () => {
  try {                           //this could be a variable, so it might be easier to change if necessary
    const conn = await mongoose.connect("mongodb://localhost:27017/web-dev"); 
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

