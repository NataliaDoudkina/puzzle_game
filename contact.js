const  express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.contact_get)








module.exports= router;