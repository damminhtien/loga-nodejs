var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var PaymentSchema = new Schema({
	orderBy : {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
  	documentID:  {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'documents'
	},
	st : String
}, {timestamps: true}, {collection : 'payments'});

module.exports = mongoose.model('Payment', PaymentSchema);