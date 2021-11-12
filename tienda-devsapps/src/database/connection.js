const mongoose = require('mongoose');

const URL = 'mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

module.exports = mongoose;