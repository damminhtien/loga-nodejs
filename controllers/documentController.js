const Document = require('../models/document');
const Tag = require('../models/tag');
const change_alias = require('../config/function');

const multer = require('multer');
const Router = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
router.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------------------
// xoa document
exports.xoa = function(req, res, next) {
    Document.findByIdAndRemove(req.params.id, function(err) {});
    res.redirect('../');
};

// -----------------------------------------------------------
// post sua document
exports.postsua = function(req, res, next) {
    upload(req, res, function(err) {
        // --------------------------------------------------------------------------
        // tạo 1 chuỗi string để covert sang json trong đó chứa các dữ liệu cần sửa 
        var jsontxt = ""; //chuỗi string
        if (req.body.name) {
            jsontxt = jsontxt + '\"' + "name\"" + ':' + '\"' + req.body.name + '\"'
            jsontxt = jsontxt + ',' + "\"name_khong_dau\"" + ':' + '\"' + change_alias.change_alias(req.body.name) + '\"'
        }
        if (req.body.url_file) {
            jsontxt = jsontxt + ',' + "\"url_file\"" + ':' + '\"' + req.body.url_file + '\"'
        }
        if (req.body.diamond) {
            jsontxt = jsontxt + ',' + "\"diamond\"" + ':' + '\"' + req.body.diamond + '\"'
        }
        if (req.body.coin) {
            jsontxt = jsontxt + ',' + "\"coin\"" + ':' + '\"' + req.body.coin + '\"'
        }
        if (req.body.content) {
            jsontxt = jsontxt + ',' + "\"content\"" + ':' + '\"' + req.body.content + '\"'
        }
        if (req.body.grade_id) {
            jsontxt = jsontxt + ',' + "\"grade_id\"" + ':' + '\"' + req.body.grade_id + '\"'
        }
        if (req.body.subject_id) {
            jsontxt = jsontxt + ',' + "\"subject_id\"" + ':' + '\"' + req.body.subject_id + '\"'
        }
        //--------------------------------------------------------------------------
        //xử lý chuỗi string covert sang json
        if (jsontxt[0] == ',') {
            var array = jsontxt.split(",")
            array.splice(0, 1);
            array.toString()
        } else {
            var array = jsontxt;
        }
        array = "{" + array + "}"
        console.log(array)
        var obj = JSON.parse(array);
        //----------------------------------------------------------------------			
        //tìm id và sửa bằng file json
        mongoose_document.findByIdAndUpdate(req.params.id, obj, { new: true }).then(console.log("update thanh cong"));
        res.redirect('../admin');
    });
};

// -----------------------------------------------------------
// view sua document
exports.getsua = function(req, res, next) {
    res.send({
        title: 'đăng ký',
        id: req.params.id
    });
};

// -----------------------------------------------------------
// view them
exports.getthem = function(req, res, next) {
    res.send({
        title: 'thêm tài khoản',
    });
}
// -----------------------------------------------------------
// post them
exports.postthem = function(req, res, next) {
    upload(req, res, async function(err) {
        const name = req.body.name;
        const url_file = req.body.url_file;
        const diamond = req.body.diamond;
        const coin = req.body.coin;
        const tag = req.body.tag;
        const content = req.body.content;
        const grade_id = 1;
        const subject_id = 1;
        const name_khong_dau = change_alias.change_alias(name);
        await mongoose_document.find({ name_khong_dau: name_khong_dau })
            .then(function(data) {
                if (data == "") {
                    mongoose_document.create({
                            name: name,
                            posted_by: {
                                id_user: 1,
                                user_name: "Thai"
                            },
                            name_khong_dau: name_khong_dau,
                            url_file: url_file,
                            coin: coin,
                            content: content,
                            tag: tag,
                            grade_id: grade_id,
                            subject_id: subject_id
                        },
                        function(err, sus) {
                            if (sus) {
                                tag.forEach(async function(element) {
                                    await mongoose_tag.findOneAndUpdate({ "tag_name": element }, { $push: { "document_id": [sus.id] } }, { new: true });
                                })
                            }
                        });
                } else {
                    res.redirect('../admin/them')
                }
            });
    });
};
