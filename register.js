var express = require('express');
var router = express.Router();
const registerController = require('../controllers/registerController')

/* GET home page. */
router.get('/', registerController.register_get );
router.post('/', registerController.register_post);

module.exports = router;
