var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
	name: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    nameKhongDau : String,
	desc: String,
	urlFile: [{ 
		type: String,
	}],
	createdat:{ 
		type: Date, 
		default: Date.now 
	},
	viewnumber:{
        type: Number,
        default: 0
    },
	downloadnumber:{
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
	content: String,
	tag: [{ 
		type: String
	}],
	comments: [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    }],
    gradeid: Number,
    subjectid: Number
}, {timestamps: true}, {collection : 'documents'});

module.exports = mongoose.model('Document', DocumentSchema);
