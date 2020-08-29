const Cake = require('../models/cake');

exports.getCakeIndex = (req, res, next) => {
    res.render('index', { title: 'Cake' });
}

exports.getAllCakes = (req, res, next) => {
    Cake.find()
    .then(cakes => {
        res.render('cakes/allcakes', {
            prods: cakes,
             title: 'All Cakes',
            path: '/admin/add'
        });
    })
    
}

exports.getCakeDetails = (req, res, next) => {
    res.render('cakes/detail', { title: 'Cake Details'});
}

exports.getCakeCart = (req, res, next) => {
    res.render('cakes/cart', { title: 'Cake Cart' });
}

exports.getAboutPage = (req, res, next) => {
    res.render('about/about', { title: 'About Us'}); 
}