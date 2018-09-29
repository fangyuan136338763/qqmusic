const express = require('express');
var router = express.Router();
var pool = require('../pool.js');

router.get('/',(req,res)=>{
    var sql = "SELECT `cid`, `details`, `play_counts`, `src`, `family_id` FROM `commend_list` WHERE family_id=10 LIMIT 0,15";
    pool.query(sql,[],(err,result)=>{
        if(err){throw err};
        res.send(result);
    });
});

module.exports = router;