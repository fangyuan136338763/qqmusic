var msg = "咱们微信联系";
if(msg.search(/微|w(ei)?\s*信|x(in)?/) != -1){
    console.log("包含敏感字");
}else{
    console.log(msg);
}

