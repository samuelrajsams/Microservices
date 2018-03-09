var userSchema = require('./user'),
    mongoose = require('mongoose'),
    user = mongoose.model('User', userSchema);
mongoose.Promise = global.Promise;


function UserModel() {
}

UserModel.prototype.findOne = function (email, callback) {
    user.findOne({email: email}, callback);
};

UserModel.prototype.create = function (data, callback) {
    user.create(data, callback);
};

module.exports = UserModel;