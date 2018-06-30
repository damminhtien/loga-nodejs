var Document = require('../models/document');

exports.index = function(req, res, next){
    Document.find().then(function(document){
		res.render('index',{
			title: 'Trang chủ',
			document: document
		});
		console.log(document);
	});
};

exports.trangchu = function(req, res, next){
 	Document.find().then(function(data){
 		res.json(data);
 	});
};