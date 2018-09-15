const express = require("express");
const router = express.Router();
const pool = require('../pool.js');


router.get('/',(req,res)=>{
    var kw = req.query.kw;
    var kws = kw.split(" ");
    kws.forEach(function(elem,i,kws){
        kws[i] = ` title like '%${elem}%' `;
    });
    var where = ` where ${kws.join(' and ')} `;
    var sql = `select *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md from xz_laptop`;
    sql += where;
    // var pno = req.query.pno;
    // var limit = ` limit ${pno*9},9 `;
    // sql += limit;
    
    pool.query(sql,[],(err,result)=>{
        if(err){console.log(err)}
        var data = {};
        data.pno = req.query.pno;
        data.pnoCount = Math.ceil(result.length/9);
        data.products = result.slice(data.pno*9,data.pno*9+9);
        res.send(data);
    });
})


module.exports = router;