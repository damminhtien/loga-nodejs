var express = require('express');
var router = express.Router();

//Require Controllers Module
var adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', adminController.index);

router.get('/xoa/:id', adminController.xoa);
router.get('/sua/:id', adminController.getsua);
router.post('/sua/:id', adminController.postsua);

router.get('/them', adminController.getthem);
router.post('/them', adminController.postthem);
router.post('/themtag', adminController.postthemtag);

module.exports = router;
