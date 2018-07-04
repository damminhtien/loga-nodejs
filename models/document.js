const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

let document_schema = new Schema({
	name: {
        type: String,
        index: true
    },
    posted_by: {
        id_user: Number,
        user_name: String
    },
    name_khong_dau: String,
	description: {
        type: String,
        index: true
    },
	url_file: [{ 
		type: String,
	}],
	view_number:{
        type: Number,
        default: 0
    },
	download_number:{
        type: Number,
        default: 0
    },
	coin:{
        type: Number,
        default: 0
    },
	diamond:{
        type: Number,
        default: 0
    },
	content:{
        type: String,
        index: true
    },
	tag: [{ 
		type: String, 
	}],
	comment: [{
        text: String,
        postedBy: {
            id_user: Number,
            user_name: String
        }
    }],
    grade_id: Number,
    subject_id: Number
}, {timestamps: true}, {collection : 'documents'});

document_schema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Document', document_schema);
