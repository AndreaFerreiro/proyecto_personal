const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notesSchema = new Schema(
    {
        date: {type: Date, require:true},
        text: {type: String, require:true}
    },
    {collection: 'Notes'}
)
const Notes = mongoose.model ('Notes', notesSchema);
module.exports = Notes;