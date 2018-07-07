const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let tagSchema = new Schema({
    name: {
        type: String,
        index: true,
    },
    name_khong_dau: String,
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
}, {timestamps: true}, {collection: 'tags'});

tagSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Tag', tagSchema);
