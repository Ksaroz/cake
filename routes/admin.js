var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin');

/* GET addCakes page */
router.get('/add', adminController.getAddCake);

/* POST addCakes */
router.post('/add', adminController.postAddCake);


module.exports = router;