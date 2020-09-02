var express = require('express');
var router = express.Router();

const adminController = require('../controllers/admin');

/* GET addCakes page */
router.get('/add', adminController.getAddCake);

/* POST addCakes */
router.post('/add', adminController.postAddCake);

/* GET Allcakes for admin */
router.get('/cakes', adminController.getAllCakes);

/* GET Edit cakes for admin */
router.get('/edit/:cakeId', adminController.getEditCakes);

/* POST Edit cakes by admin */
router.post('/edit', adminController.postEditCakes);

/* POST Delete Cakes by admin */
router.post('/delete', adminController.postDeleteCake);

/* GET Order page */
router.get('/orders', adminController.getOrders);


module.exports = router;