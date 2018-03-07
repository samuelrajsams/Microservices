
var userSchema = require('./models/user')
User,
mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersData");

module.exports = {
    User = mongoose.model("User", userSchema)
}

