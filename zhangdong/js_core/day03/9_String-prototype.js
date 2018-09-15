var str = "     fang        yuan        ";
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
}
console.log(`|${str.ltrim()}|`);
console.log(`|${str.rtrim()}|`);