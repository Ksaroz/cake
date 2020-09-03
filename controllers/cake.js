const Cake = require('../models/cake');
const Order = require('../models/order');

exports.getCakeIndex = (req, res, next) => {
    res.render('index', { title: 'Shop' });
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
    const cakeId = req.params.cakeId;
    Cake.findById(cakeId)
    .then(cake => {
        res.render('cakes/detail', { 
            title: 'cake Details',
            cake: cake,
            path: '/details'
        });

    })
}

exports.getCakeCart = (req, res, next) => {
    req.user
    .populate('cart.items.cakeId')
    .execPopulate()
    .then(user => {
        const cakes = user.cart.items;
        res.render('cakes/cart', { 
            title: 'Cake Cart',
            cakes: cakes
        });
    })
    .catch(err => console.log(err));
}

exports.postCakeCart = (req, res, next) => {
    const cakeId = req.body.cakeId;
    Cake.findById(cakeId)
    .then(cake => {
        return req.user.addToCart(cake);
    })
    .then(result => {
        console.log(result);
        res.redirect('/cart');
    });
};

exports.postCartDeleteCake = (req, res, next) => {
    const cakeId = req.body.cakeId;
    req.user
        .removeFromCart(cakeId)
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
}

exports.postOrder = (req, res, next) => {
    req.user
    .populate('cart.items.cakeId')
    .execPopulate()
    .then(user => {
        const cakes = user.cart.items.map(i => {
            return { quantity: i.quantity, cake: { ...i.cakeId._doc } };
        });
        const order = new Order({
            user: {
                name: req.user.name,
                userId: req.user
            },
            cakes: cakes
    });
    order.save();
    })
    .then(result => {
        return req.user.clearCart();        
    })
    .then(() => {
        res.redirect('/cart');
    })
    .catch(err => console.log(err));
};


exports.getAboutPage = (req, res, next) => {
    res.render('about/about', { title: 'About Us'}); 
}