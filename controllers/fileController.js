const multer = require('multer');

// -----------------------------------------------------------
// xử lý upload file
const storageImage = multer.diskStorage({
    destination: './public/uploads/images/',
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.jpg');
    },
});
const uploadImage = multer({storage: storageImage}).single('images');
