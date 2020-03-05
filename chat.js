const  express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
//const trycontr = require('../controllers/trychat');

router.get('/', chatController.get_chat)

 

module.exports=  router;
