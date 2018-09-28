const express = require('express');
var router = express.Router();
var pool = require('../pool.js');

router.get('/',(req,res)=>{
    var sql = "SELECT `cid`, `details`, `play_counts`, `src`, `family_id` FROM `commend_list` GROUP BY family_id";
    pool.query(sql,[],(err,result)=>{
        if(err){throw err};
        res.send(result);
    });
});

module.exports = router;