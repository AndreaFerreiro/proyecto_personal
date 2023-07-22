const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notesSchema = new Schema(
    {
        date: Date,
        text: String    
    },
    {collection: 'Notes'}
)
const Notes = mongoose.model ('Notes', notesSchema);
module.exports = Notes;