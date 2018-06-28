var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username        : String,
    img 			: String,
	email 			: String,
	password 		: String
}, {timestamps: true}, {collection : 'users'});

module.exports = mongoose.model("User", UserSchema);