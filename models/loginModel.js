var userSchema = require('./user'),
    mongoose = require("mongoose");
User = mongoose.model("User", userSchema),
    mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersData");

function LoginModel() {

}
LoginModel.prototype.login = function (params, callback) {
    User.findOne({email: params.email }, function (err, results) {
        if (err) {
            callback({ message: "Authentication failed. User not found." });
        } else if (results) {
            if (results.password === params.password) {
                callback(null, results);
            } else {
                callback({ message: "wrong password. Try again." });
            }

        } else {
            callback({ message: "You have not registered. Please sign up." });
        }
    });
}
module.exports = LoginModel;