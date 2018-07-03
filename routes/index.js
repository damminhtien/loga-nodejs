var express = require('express');
var router = express.Router();

//Require Controllers Module
var home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);

router.get('/:tenkodau', home_controller.getchitiet);
router.post('/:tenkodau', home_controller.postchitiet);

router.get('/trangchu', home_controller.trangchu);

module.exports = router;
