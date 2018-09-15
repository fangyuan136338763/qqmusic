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
        // console.log(result);
        if(result.length){
            res.send(`http://localhost:5000/index?id=${result[0].id}`);
        }else{
            res.send("error");
        }
    });
});

module.exports = router;