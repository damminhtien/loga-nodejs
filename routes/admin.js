const express = require('express');
const router = express.Router();

// Require Controllers Module
const adminController = require('../controllers/adminController');

/* GET home page. */
router.get('/', adminController.index);

router.get('/xoa/:id', adminController.xoa);
router.get('/sua/:id', adminController.getsua);
router.post('/sua/:id', adminController.postsua);

router.get('/them', adminController.getthem);
router.post('/them', adminController.postthem);
router.post('/themtag', adminController.postthemtag);

module.exports = router;
