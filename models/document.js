const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

var DocumentSchema = new Schema({
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
	created_at:{ 
		type: Date, 
		default: Date.now 
	},
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
		type: mongoose.Schema.Types.ObjectId,
        ref: 'tags'
	}],
	comments: [{
        text: String,
        postedBy: {
            id_user: Number,
            user_name: String
        }
    }],
    grade_id: Number,
    subject_id: Number
}, {timestamps: true}, {collection : 'documents'});

UserSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Document', DocumentSchema);
