require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const connect = () => {
  try{
    mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected")
  } catch(err) {
    console.log("MongoDB Connection Failed")
  }
};

module.exports = { connect };
