const  express = require('express');
const router = express.Router();
const puzzleCategoryController = require('../controllers/puzzleCategoryController');

//GET request for  1 of 5 categories
router.get ('/:categoryType', puzzleCategoryController.load_category_get );

//GET request for pictures 
router.get('/:categoryType/picture/:id',puzzleCategoryController.load_picture_get);


module.exports= router;