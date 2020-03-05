const  express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

router.get('/', reportController.report_get)
router.post('/', reportController.getRequest)







module.exports= router;
