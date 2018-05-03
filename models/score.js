var mongoose = require("mongoose");

var scoreSchema = mongoose.Schema({

    name: String,
    score: Number

});

module.exports = mongoose.model("Scores", scoreSchema);