const express = require('express');
let router = express.Router();

// Require Controllers Module
const homeController = require('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/:tenkodau', homeController.getchitiet);
router.post('/:tenkodau', homeController.postchitiet);

router.get('/trangchu', homeController.trangchu);

module.exports = router;
