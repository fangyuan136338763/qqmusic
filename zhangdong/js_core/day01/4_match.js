var str = "you can you up,no can no bibi";
var arr = str.match(/you|no/g);
console.log(`共找到${arr?arr.length:0}`);
arr&&console.log(`分别是${arr}`);
