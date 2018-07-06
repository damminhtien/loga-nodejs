const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

var TagSchema = new Schema({
	name: {
        type: String,
        index: true
    },
    name_khong_dau: String,
	description: {
        type: String,
        index: true
    },
	created_at:{ 
		type: Date, 
		default: Date.now 
    },
    has_number_post:{
        type: Number,
        default: 0
    }
}, {timestamps: true}, {collection : 'documents'});

TagSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Document', DocumentSchema);
