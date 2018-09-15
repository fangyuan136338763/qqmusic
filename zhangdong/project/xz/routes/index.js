const express = require("express");
const router = express.Router();
const pool = require('../pool.js');
router.get("/",(req,res)=>{
    var sql = 'SELECT * FROM xz_index_product where seq_recommended!=0 order by seq_recommended DESC';
    pool.query(sql,[],(err,result)=>{
        if(err){throw err}
        res.send(result);
    });
})

module.exports = router;