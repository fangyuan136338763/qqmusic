var str = "原来你是我的，我的不是你的，你才是我的，我的不一定是你的，你的一定是我的";
var arr = str.match(/[我你]的/g);
var str = str.replace(/[我你]的/g,"**");

console.log(str);
console.log(`共替换${arr?arr.length:0}`);