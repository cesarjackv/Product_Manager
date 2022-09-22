const ProductController = require('../controllers/product_controller');

module.exports = app => {
    app.get('/api/Products', ProductController.findAllProducts);
    app.get('/api/Products/:id', ProductController.findOneProduct);
    app.put('/api/Products/:id', ProductController.updateProduct);
    app.post('/api/Products', ProductController.createNewProduct);
    app.delete('/api/Products/:id', ProductController.deleteProduct);
}