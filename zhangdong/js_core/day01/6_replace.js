var str = "no zuo no die,no can no bibi";

str = str.replace(/\b[a-z]/ig,function(a){
    return a.toUpperCase();
});
console.log(str);