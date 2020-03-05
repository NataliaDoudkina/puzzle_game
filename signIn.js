var express = require('express');
var router = express.Router();
const signInController = require('../controllers/signInController')

/* GET request sign in */
router.get('/', signInController.signIn_get);

/* POST request sign in */
router.post('/', signInController.signIn_post);


module.exports = router;
