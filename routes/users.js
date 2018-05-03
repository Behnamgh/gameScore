var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

mongoose.connect("mongodb://behnam:locked@ds041623.mongolab.com:41623/medicaldevice"); // connect to our database

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
