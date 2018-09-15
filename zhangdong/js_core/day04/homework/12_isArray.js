var obj1 = {};
var obj2 = [];
var obj3 = new Date();

function isArray(obj){
    return Object.prototype.toString.call(obj)=="[object Array]";
    return Object.getPrototypeOf(obj) == Array.prototype;
}

console.log(
    isArray(obj1),
    isArray(obj2),
    isArray(obj3)
);