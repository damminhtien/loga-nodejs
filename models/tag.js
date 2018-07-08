const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let tagSchema = new Schema({
    name: {
        type: String,
        index: true,
    },
    ansi_name: String,
    description: {
        type: String,
        index: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    has_number_post: {
        type: Number,
        default: 0,
    },
}, {timestamps: true}, {collection: 'tags'}, {_id: false});

tagSchema.plugin(AutoIncrement);

module.exports = mongoose.model('Tag', tagSchema);
