const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ordersSchema = new Schema(
    {
         orderdate: {type: Date, require:true},
         pickupdate: {type: Date, require:true},
         product: {type: String, require:true},
         amount: {type: Number, require:true},
         client: {type: String, require:true},
         contact: {type: Number, require:true},
         ref: {type: Number, require:true} 
    },
    {collection: 'Orders'}
)
const Orders = mongoose.model ('Orders', ordersSchema);
module.exports = Orders;