var LoginModel = require('../models/loginModel'),
    crypto = require('crypto'),
    config = require('../config/main'),
    lm;
    const jwt = require('jsonwebtoken');

function LoginController() {
    lm = new LoginModel();
}

LoginController.prototype.authenticate = function (req, res, next) {
    var params = {
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest("hex")
    };
    lm.login(params, function (err, data) {
        if (err) {
            res.status(422).send(err);
        } else {
            var JwtToken = jwt.sign(data.toJSON(), config.secret, {
                expiresIn: 7776000 // in seconds 90 days
            });
            res.status(200).send({'token': JwtToken, 'data' : data});
        }
    });
};
module.exports = LoginController;