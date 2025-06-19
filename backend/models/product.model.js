const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { 
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['vegetables', 'fruits', 'chocolates', 'eggs', 'bread', 'meats', 'protein-shakes']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; 