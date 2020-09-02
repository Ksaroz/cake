const Cake = require('../models/cake');
const Order = require('../models/order');
//const { populate } = require('../models/cake');

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
        imageUrl: cakeImageUrl,
        userId: req.user
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

exports.getAllCakes = (req, res, next) => {
    Cake.find()
    .then(cakes => {
        res.render('admin/allCakes', {
            prods: cakes,
            title: 'All Cakes',
            path: '/admin/cakes'
        });
    })
    .catch(err => console.log(err));
}

exports.postDeleteCake = (req, res, next) => {
    const cakeId = req.body.cakeId;
    Cake.findByIdAndRemove(cakeId)
    .then(() => {
        console.log('Cake Deleted');
        res.redirect('/admin/cakes');
    })
    .catch(err => console.log(err));
}

exports.getEditCakes = (req, res, next) => {
    // const editMode = req.query.edit;
    // if(!editMode) {
    //     return res.redirect('/');
    // }

    const cakeId = req.params.cakeId;
    Cake.findById(cakeId)
    .then(cake => {
        if(!cake) {
            return res.redirect('/');
        }
        res.render('admin/editCake', {
            title: 'Edit Cake',
            path: '/admin/edit',
            cake: cake
            // editing: editMode,

        });
    })
    .catch(err => console.log(err));
}

exports.postEditCakes = (req, res, next) => {
    const cakeId = req.body.cakeId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDesc = req.body.description;

    Cake.findById(cakeId)
    .then(cake => {
        cake.title = updatedTitle;
        cake.imageUrl = updatedImageUrl;
        cake.price = updatedPrice;
        cake.description = updatedDesc;
        return cake.save();
    })
    .then(result => {
        console.log('Cake Updated!');
        res.redirect('/admin/cakes ');
    })
    .catch(err => console.log(err));
};

exports.getOrders = (req, res, next) => {
    Order.find({ 'user.userId': req.user._id })
    .then(orders => {
        res.render('admin/orders', {
            title: 'Orders',
            orders: orders
        });
    })
    .catch(err => console.log(err));
};