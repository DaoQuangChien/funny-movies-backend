const mongoose = require("mongoose");
const db = {};

mongoose.Promise = global.Promise;
db.mongoose = mongoose;
db.user = require("./user.model");
db.movie = require("./movie.model");
module.exports = db;
