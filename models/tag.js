var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tag_schema = new Schema({
	tag_name: String,
    document_id:[
    {type: String}
   ]  
}, {timestamps: true}, {collection : 'tag'});
module.exports = mongoose.model('Tag', tag_schema);
