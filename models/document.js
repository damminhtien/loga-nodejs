var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var document_schema = new Schema({
    
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
         _id: false,
        text: {type: String},
        postedBy: {
            id_user:{type: Number},
            user_name:{type: String}
        }
    }],
    grade_id: Number,
    subject_id: Number
}, {timestamps: true}, {collection : 'documents'});

module.exports = mongoose.model('Document', document_schema);
