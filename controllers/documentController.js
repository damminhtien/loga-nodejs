const Document = require('../models/document');
const Tag = require('../models/tag');
const func = require('../config/function');
const fileController = require('fileController');

const Router = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
router.use(bodyParser.urlencoded({extended: true}));
const multer = require('multer');

exports.getAll = (req, res, next) => {
    Document.find().then((data) => {
            res.jsonp({
                message: 'Get all documents',
                code: 200,
                data: data,
            });
        }
    );
    return true;
};

exports.findById = (req, res, next) => {
    const id = req.params.id;
    Document.findById(id).then((data) => {
            res.jsonp({
                message: 'Get ' + id + ' documents',
                code: 200,
                data: data,
            });
        }
    );
    return true;
};

// create document
exports.create = (req, res, next) => {
    const name = req.body.name;
    const ansi_name = func.change_alias(name);
    const url_file = func.getFileName(req.files.originalname);
};

// delete document
exports.delete = (req, res, next) => {
    const id = req.params.id;
    Document.findByIdAndRemove(id, (err) => {
        if (err) {
            console.log('Error when delete id' + id + ' : ' + err);
            res.jsonp({
                message: 'Error when delete id' + id + ' : ' + err,
                code: 500,
            });
        } else {
            res.jsonp({
                message: 'Delete document ' + id + ' successfully',
                code: 200,
            });
        }
    });
};

// update document
exports.update = (req, res, next) => {
    let document = {};
    if (req.body.name) {
        document.name = req.body.name;
        document.ansi_name = func.change_alias(req.body.name);
    }
    if (req.files) {
        document.url_file = '';
    }
    Document.findByIdAndUpdate(req.params.id, document, {new: true})
    .then(()=>{
        res.jsonp({
            message: 'Update successfully',
            code: '200',
        });
    });
};

// // post them
// exports.postthem = function(req, res, next) {
//     upload(req, res, async function(err) {
//         const name = req.body.name;
//         const url_file = req.body.url_file;
//         const diamond = req.body.diamond;
//         const coin = req.body.coin;
//         const tag = req.body.tag;
//         const content = req.body.content;
//         const grade_id = 1;
//         const subject_id = 1;
//         const name_khong_dau = change_alias.change_alias(name);
//         await mongoose_document.find({ name_khong_dau: name_khong_dau })
//             .then(function(data) {
//                 if (data == "") {
//                     mongoose_document.create({
//                             name: name,
//                             posted_by: {
//                                 id_user: 1,
//                                 user_name: "Thai"
//                             },
//                             name_khong_dau: name_khong_dau,
//                             url_file: url_file,
//                             coin: coin,
//                             content: content,
//                             tag: tag,
//                             grade_id: grade_id,
//                             subject_id: subject_id
//                         },
//                         function(err, sus) {
//                             if (sus) {
//                                 tag.forEach(async function(element) {
//                                     await mongoose_tag.findOneAndUpdate({ "tag_name": element }, { $push: { "document_id": [sus.id] } }, { new: true });
//                                 })
//                             }
//                         });
//                 } else {
//                     res.redirect('../admin/them')
//                 }
//             });
//     });
// };
