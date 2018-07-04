const Document = require('../models/document');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(bodyParser.urlencoded({ extended: false }));

exports.create = function(req, res, next){
    Document.find().then(function(user){
		res.send({
			title: 'Trang chủ',
			user: user
		});
		console.log(user);
	});
};