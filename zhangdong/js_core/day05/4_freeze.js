"use strict"
var pool = {
    ip: "192.168.0.100",
    port: 3306,
    db: "xz",
    user: "root",
    pwd: ""
};
Object.freeze(pool);
pool.db = "orders";
console.log(pool);