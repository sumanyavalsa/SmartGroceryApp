const router = require('express').Router();
let Product = require('../models/product.model');

// Get all products
router.route('/').get((req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get products by category
router.route('/category/:category').get((req, res) => {
    Product.find({ category: req.params.category })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add new product
router.route('/add').post((req, res) => {
    const { name, category, price, description, imageUrl, stock } = req.body;

    const newProduct = new Product({
        name,
        category,
        price,
        description,
        imageUrl,
        stock
    });

    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get product by id
router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete product
router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update product
router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.category = req.body.category;
            product.price = req.body.price;
            product.description = req.body.description;
            product.imageUrl = req.body.imageUrl;
            product.stock = req.body.stock;

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 