const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema(
    {
        name: String,
        ref: Number,
        category: String,
        stock: Number    
    },
    {collection: 'Products'}
)
const Products = mongoose.model ('Products', productsSchema);
module.exports = Products;