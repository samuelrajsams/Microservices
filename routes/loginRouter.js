var express = require('express'),
    router = express.Router(),
    LoginController = require('../controllers/loginController'),
    loginControl = new LoginController();

router.post('/', loginControl.authenticate.bind(loginControl));
module.exports = router;