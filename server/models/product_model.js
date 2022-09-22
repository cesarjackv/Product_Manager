const mongoose = require('mongoose');

const Product_ManagerSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
});

const Product_Manager = mongoose.model('Product_Manager', Product_ManagerSchema);

module.exports = Product_Manager;