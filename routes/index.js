var express = require('express'),
    router = express.Router();
router.get('/', function (req, res, next) {
   console.log('This is application version one');
});
router.use('/login', require('./loginRouter'));
router.use('/register', require('./registerRouter'));
module.exports = router;