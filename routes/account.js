var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('accounts/account', { title: 'Account' });
});

module.exports = router;
