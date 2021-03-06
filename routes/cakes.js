var express = require('express');
var router = express.Router();

const cakesController = require('../controllers/cake');

/* GET home page. */
router.get('/', cakesController.getCakeIndex );

/* GET allCakes page. */
router.get('/cakes', cakesController.getAllCakes);

/* GET cake-details page */
router.get('/details/:cakeId', cakesController.getCakeDetails);

/* GET Cart page */
router.get('/cart', cakesController.getCakeCart);

/* POST add to Cart */
router.post('/cart', cakesController.postCakeCart);

/* POST Delete Cart Items */
router.post('/cart/delete', cakesController.postCartDeleteCake);

/* POST Place Orders */
router.post('/orders', cakesController.postOrder);

/* GET About page */
router.get('/about', cakesController.getAboutPage);


module.exports = router;
