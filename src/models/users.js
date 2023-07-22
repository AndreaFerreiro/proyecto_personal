const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema(
    {
         name: String,
         username: String,
         email: String,
         password: String,
    },
    {collection: 'Users'}
)
const Users = mongoose.model ('Users', usersSchema);
module.exports = Users;