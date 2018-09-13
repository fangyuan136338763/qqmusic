const express = require("express");
const router = express.Router();
var pool = require('../pool.js');

router.post('/register',(req,res)=>{
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    var $phone = req.body.phone;
    console.log($uname,$upwd,$phone);
})

module.exports = router;