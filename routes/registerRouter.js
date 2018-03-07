var express = require('express'),
    router = express.Router(),
    registerController = require('../controllers/registerController'),
    registerControl = new registerController();

router.post('/', registerControl.register.bind(registerControl));


module.exports = router;