const  express = require('express');
const router = express.Router();
const deleteAccountController = require('../controllers/deleteAccountController');

router.get('/', deleteAccountController.deleteAccount);


module.exports= router;