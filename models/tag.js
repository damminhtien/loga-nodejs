const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const tag_schema = new Schema({
    tag_name: String,
    document_id: [{ 
    	type: String 
    }]
}, { timestamps: true }, { collection: 'tags' });

tag_schema.plugin(AutoIncrement, { inc_field: 'id_tag' });

module.exports = mongoose.model('Tag', tag_schema);