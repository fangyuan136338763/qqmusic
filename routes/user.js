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

module.exports = router;