const express = require('express');
// exports.findAllBooks = async (req, res) => {}
// router.get('/', bookCtrl.findAllBooks);


const router = express.Router();


const authCtrl = require('../controller/authentication.controller');


router.post('/signup', authCtrl.signUp);


router.post('/login', authCtrl.logIn);


module.exports = router;