var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongo DB connection Info
var mongoDB = 'mongodb://127.0.0.1/inventory';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const todo = require("./routes/todo.route");

app.use('/todos', todo);

app.listen(3000, () => {
    console.log('Server is up and running on port numner 3000');
});