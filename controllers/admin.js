const Cake = require('../models/cake');

exports.getAddCake = (req, res, next) => {
    res.render('admin/addCakes', { title: 'Add Cake'});
}

exports.postAddCake = (req, res, next) => {
    const cakeTitle = (req.body.title);
    const cakeImageUrl = (req.body.imageUrl); 
    const cakePrice = (req.body.price);
    const cakeDescription = (req.body.description);

    const cake = new Cake({
        title: cakeTitle,
        price: cakePrice,
        description: cakeDescription,
        imageUrl: cakeImageUrl
    });
    cake.save()
    .then(result => {
        console.log('New Cake Added');
        res.redirect('/cakes')
    })
    .catch(err => {
        console.log(err);
    });
}