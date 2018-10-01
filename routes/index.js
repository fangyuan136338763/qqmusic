const express = require('express');
var router = express.Router();
var pool = require('../pool.js');

router.get('/',(req,res)=>{
    var sql = "SELECT b.`family_id` , b.`cid`, b.`play_counts`,b.`src`,b.`details`  FROM `commend_list` b WHERE	b.family_id IN (10,20,30,40,50,60) GROUP BY CONCAT (b.`family_id`, b.`cid` % 15)";
    pool.query(sql,[],(err,result)=>{
        if(err){throw err};
        res.send(result);
    });
});

module.exports = router;



