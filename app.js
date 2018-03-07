
var express = require('express'),
mongoose = require("mongoose"),
app = express();
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen('8000');
app.use('/v1', require('./routes'));
mongoose.connect("mongodb://localhost:27017/usersData");
module.exports = app;

