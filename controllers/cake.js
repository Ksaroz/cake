const Cake = require('../models/cake');

exports.getCakeIndex = (req, res, next) => {
    res.render('index', { title: 'Cake' });
}

exports.getAllCakes = (req, res, next) => {
    res.render('cakes/allcakes', { title: 'All Cakes' });
}

exports.getAddCake = (req, res, next) => {
    res.render('cakes/addCakes', { title: 'Add Cake'});
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
        res.redirect('/')
    })
    .catch(err => {
        console.log(err);
    });
}

exports.getCakeDetails = (req, res, next) => {
    res.render('cakes/detail', { title: 'Cake Details'});
}

exports.getCakeCart = (req, res, next) => {
    res.render('cakes/cart', { title: 'Cake Cart' });
}