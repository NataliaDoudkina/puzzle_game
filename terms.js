const  express = require('express');
const router = express.Router();
const termsController = require('../controllers/termsController');

router.get('/', termsController.terms_get)








module.exports= router;
