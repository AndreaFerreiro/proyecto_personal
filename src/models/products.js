const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productsSchema = new Schema(
    {
        name: {type: String, require: true},
        ref: {type: Number, require: true},
        category: {type: String, require: true},
        stock: {type: Number, require: true}    
    },
    {collection: 'Products'}
)
const Products = mongoose.model ('Products', productsSchema);
module.exports = Products;