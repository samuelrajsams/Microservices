var express = require('express'),
    mongoose = require("mongoose"),
    app = express(),
    async = require('async'),
    databaseUri,
    bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen('8000');
app.use('/v1', require('./routes'));

databaseUri = "mongodb://localhost:27017/usersData";

async.apply(mongoose.connect(databaseUri, {
    useMongoClient: true
}));
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + databaseUri);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});


module.exports = app;

