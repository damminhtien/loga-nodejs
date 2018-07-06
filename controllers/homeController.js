const mongoose_document = require('../models/document');
const mongoose_tag = require('../models/tag');
const change_alias = require('../config/function');

const multer = require('multer');
const Router = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
router.use(bodyParser.urlencoded({ extended: true }));

// -----------------------------------------------------------
// xử lý upload file
const storage = multer.diskStorage({
    destination: './public/uploads/images/',
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + ".jpg");
    }
});
const upload = multer({ storage: storage }).single('images');

// -----------------------------------------------------------
exports.index = function(req, res, next) {
    mongoose_document.find().then(function(document) {
        res.send({
            title: 'Trang chủ',
            document: document
        });
        console.log(document);
    });
};

// -----------------------------------------------------------
exports.trangchu = function(req, res, next) {
    mongoose_document.find().then(function(data) {
        res.send(data);
    });
};
// -----------------------------------------------------------
exports.getchitiet = function(req, res, next) {
    mongoose_document.find({ name_khong_dau: req.params.tenkodau }).then(function(data) {
        res.send(data);
    });

};

// -----------------------------------------------------------
exports.postchitiet = async function(req, res, next) {
    upload(req, res, async function(err) {
        const comment = req.body.comment;
        const id_user = 2;
        const user_name = "thai";
        await mongoose_document.findOneAndUpdate({ "name_khong_dau": req.params.tenkodau }, {
            $push: {
                "comment": {
                    text: comment,
                    postedBy: {
                        id_user: id_user,
                        user_name: user_name
                    }
                }
            }
        }, { new: true });
    });

}
