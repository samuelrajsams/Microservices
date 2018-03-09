var userModel = require('./userModel'),
    user;

function LoginModel() {
    user = new userModel();

}

LoginModel.prototype.login = function (params, callback) {
    user.findOne(params.email, function (err, results) {
        if (err) {
            callback({message: "Authentication failed. User not found." });
        } else if (results) {
            if (results.password === params.password) {
                callback(null, results);
            } else {
                callback({message: "wrong password. Try again."});
            }
        } else {
            callback({message: "You have not registered. Please sign up." });
        }
    });
};

module.exports = LoginModel;