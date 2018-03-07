var app = require('express'),
    crypto = require('crypto'),
    registerModel = require('../models/registerModel'),
    rm;
function registerController() {
    rm = new registerModel();
}

registerController.prototype.register = function (req, res, next) {
    params = {
        email: req.body.email,
        password: crypto.createHash('md5').update(req.body.password).digest("hex"),
        name : req.body.name,
        username: req.body.email
    };
    rm.signUp(params, function (err, data) {
            if (err) {
                res.status(422).send(err);
            } else {
                res.status(200).send("register successfully");
            }
    });
}

module.exports = registerController;