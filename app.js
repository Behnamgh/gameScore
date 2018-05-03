var createError = require('http-errors');
var port = process.env.PORT || 3000;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');



var app = express();

mongoose.connect("mongodb://behnam:locked@ds111420.mlab.com:11420/gameapi"); // connect to our database


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes/score')(app);


app.listen(port, function (req, res) {
  console.log('is listening on: ' + port);
});