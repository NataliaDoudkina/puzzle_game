const  express = require('express');
const router = express.Router();
const puzzleActionController = require('../controllers/puzzleActionController');

router.get ('/', puzzleActionController.puzzleAction_get);
router.get('/score/:id', puzzleActionController.saveTime);
 

module.exports= router;