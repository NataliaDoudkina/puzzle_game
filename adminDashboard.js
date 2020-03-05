const  express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.authenticate)
router.get('/:id', adminController.getInfo)
router.get('/reports/deleteReport/:id', adminController.deleteReport)





module.exports= router;
