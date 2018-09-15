var msg = "我草，你家真大";
var arr = msg.match(/我\s*[草操艹槽]|cao/i);

if(arr){
    console.log(`敏感字在${arr["index"]},敏感字为：${arr[0]}，关小黑屋`);
}else{
    console.log('成亮说：'+msg);
}