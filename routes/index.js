const express = require('express');
let router = express.Router();

//Require Controllers Module
const home_controller = require('../controllers/homeController');

/* GET home page. */
router.get('/', home_controller.index);

router.post('/trangchu', home_controller.trangchu);

module.exports = router;
