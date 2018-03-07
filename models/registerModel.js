var userSchema = require('./user'),
mongoose = require("mongoose"),
User = mongoose.model("User", userSchema);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/usersData");

function registerModel() {
}
registerModel.prototype.signUp = function (params, callback) {
    if (!params.email) {
        callback({err: 'You must enter an email address.'})
    }
    if (!params.name) {
        callback({err: 'You must enter your full name.'})
    }
    if (!params.password) {
        callback({err: 'You must enter a password.'})
    }
    User.findOne({email: params.email }, function (err, existingUser) {
        if (err) { 
            return (err) 
        }
        if (existingUser) {
            callback({err: 'Email address is already in use.'})
        } else {
            var myData = new User(params);
            myData.save({},function(err ,data) {
                if (err) {
                    callback({err: "unable to save to database"});
                } else {
                    callback(null ,data);
                }
            });
        }
    });   
}
module.exports = registerModel;

