var express = require('express');
var router = express.Router();

/* GET allCakes page. */
router.get('/', function(req, res, next) {
  res.render('cakes/allcakes', { title: 'All Cakes' });
});

/* GET cake-details page */
router.get('/details', function(req, res, next) {
  res.render('cakes/detail', { title: 'Cake Details'});
})


module.exports = router;
