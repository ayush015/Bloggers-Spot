//Imports
require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(
    // "mongodb+srv://admin-Ayush:kOknVqEHwoHg7c0j@bloggers-spot.zst4h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //production DB hosted on MongoDB Atlas
    "mongodb://localhost:27017/BloggersSpot", // Local DB
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(async () => {
    console.log("Connection to DB established");
  })
  .catch(async (err) => {
    console.log(err);
  });

//DB responses
const connection = mongoose.connection;

connection.once("open", () => console.log("Connecting to DB..."));
