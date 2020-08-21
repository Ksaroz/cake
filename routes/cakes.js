var express = require('express');
var router = express.Router();

const cakesController = require('../controllers/cake');

/* GET home page. */
router.get('/', cakesController.getCakeIndex );

/* GET allCakes page. */
router.get('/cakes', cakesController.getAllCakes);

/* GET addCakes page */
router.get('/add', cakesController.getAddCake);

/* GET cake-details page */
router.get('/details', cakesController.getCakeDetails);

/* GET Cart page */
router.get('/cart', cakesController.getCakeCart);


module.exports = router;
