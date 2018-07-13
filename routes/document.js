const express = require('express');
const router = express.Router();

// Require Controllers Module
const documentController = require('../controllers/documentController');

/* GET home page. */
router.get('/getAll', documentController.getAll);

module.exports = router;
