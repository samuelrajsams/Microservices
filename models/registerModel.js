var userModel = require('./userModel'),
    user;

function registerModel() {
    user = new userModel();
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
    user.findOne(params.email, function (err, existingUser) {
        if (err) {
            return (err)
        }
        if (existingUser) {
            callback({err: 'Email address is already in use.'})
        } else {
            user.email = params.email.toLowerCase();
            user.username = params.email.toLowerCase();
            user.password = params.password;
            user.name = params.name;
            user.create(user, function (err , data) {
                if (err) {
                    callback({err: "unable to save to database"});
                } else {
                    callback(null ,data);
                }
            });
        }
    });
};
module.exports = registerModel;

