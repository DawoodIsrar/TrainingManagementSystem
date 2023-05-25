const express = require("express")
const ragister =  require("../controllers/auth")
const logIn = require('../controllers/loginAouth')


const router = express.Router();
 router.post('/register' ,ragister);
 router.post('/logIn' ,logIn);

 module.exports = router;

