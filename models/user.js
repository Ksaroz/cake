const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            cakeId: { type: Schema.Types.ObjectId, ref: 'Cake', required: true},
            quantity: { type: Number, required: true}
        }]
    }
});

userSchema.methods.addToCart = function (cake) {
    const cartCakeIndex = this.cart.items.findIndex(cc => {
        return cc.cakeId.toString() === cake._id.toString();
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if(cartCakeIndex >= 0) {
        newQuantity = this.cart.items[cartCakeIndex].quantity + 1;
        updatedCartItems[cartCakeIndex].quantity = newQuantity;
    } else {
        updatedCartItems.push({
            cakeId: cake._id,
            quantity: newQuantity
        });
    }
    const updatedCart = {
        items: updatedCartItems
    };
    this.cart = updatedCart;
    return this.save();
};

userSchema.methods.removeFromCart = function(cakeId) {
    const updatedCartItems = this.cart.items.filter(item => {
        return item.cakeId.toString() !== cakeId.toString();
    });
    this.cart.items = updatedCartItems;
    return this.save();
};

userSchema.methods.clearCart = function () {
    this.cart = { items: [] };
    return this.save();
}

module.exports = mongoose.model('User', userSchema);