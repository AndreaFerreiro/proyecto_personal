const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ordersSchema = new Schema(
    {
         orderdate: Date,
         pickupdate: Date,
         product: String,
         amount: Number,
         client: String,
         contact: Number,
         ref: Number 
    },
    {collection: 'Orders'}
)
const Orders = mongoose.model ('Orders', ordersSchema);
module.exports = Orders;