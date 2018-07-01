var Document = require('../models/document');

exports.index = function(req, res, next){
    Document.find().then(function(user){
		res.send({
			title: 'Trang chủ',
			user: user
		});
		console.log(user);
	});
};

exports.trangchu = function(req, res, next){
 	Document.find().then(function(data){
 		res.json(data);
 	});
};