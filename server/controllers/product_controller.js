const Products = require('../models/product_model');

module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneProduct = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneProduct => res.json({ product: oneProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewProduct = (req, res) => {
    Products.create(req.body)
        .then(newProduct => res.json({ product: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ product: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}