const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/",(req,res)=>{
    var lid = req.query.lid;
    var obj = {product:{},specs:[],pics:[]};
    (async function(){
        var sql = `SELECT * FROM xz_laptop where lid=?`;
        await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
                if(err){throw err};
                obj.product = result[0];
                // console.log(result[0]);
                open();
            });
        });
        var sql = `select lid,spec from xz_laptop where family_id=(select family_id from xz_laptop where lid=?)`;
        await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
                if(err){throw err};
                obj.specs = result;
                // console.log(result);
                open();
            });
        });
        var sql = `SELECT * FROM xz_laptop_pic where laptop_id=?`;
        await new Promise(function(open){
            pool.query(sql,[lid],(err,result)=>{
                if(err){throw err}
                obj.pics = result;
                open();
            });
        });

        res.send(obj);
    })();
    
})


module.exports = router;