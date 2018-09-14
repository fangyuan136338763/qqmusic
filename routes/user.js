const express = require("express");
const router = express.Router();
var pool = require('../pool.js');

router.post('/register',(req,res)=>{
    var sql = `INSERT INTO user set ?`;
    pool.query(sql,req.body,(err,result)=>{
        if(err){throw err}
        if(result.affectedRows>0){
            res.send("ok");
        }
    });
})
router.post('/login',(req,res)=>{
    var sql = `select * from user where uname=? and upwd=?`;
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    console.log($uname,$upwd);
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err){throw err}
        if(result){
            console.log(result);
            res.send("ok");
        }
    });
});

module.exports = router;