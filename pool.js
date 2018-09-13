const mysql = require("mysql");
var pool = mysql.createPool({
    user: "root",
    password: "",
    database: "music",
    host: "localhost"
});





module.exports = pool;