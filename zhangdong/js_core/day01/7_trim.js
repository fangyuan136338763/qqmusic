var str = "     fang   yuan    ";

function ltrim(){
    return str.replace(/^\s+/,"");
}
function rtrim(){
    return str.replace(/\s+$/,"");
}
function trim(){
    return str.replace(/^\s+|\s+$/g,"");
}

console.log(`|${ltrim(str)}|`);
console.log(`|${rtrim(str)}|`);
console.log(`|${trim(str)}|`);
