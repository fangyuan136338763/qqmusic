function pay(...arr){
    console.log(arguments);
    console.log(arr);
    console.log(...arr);
    if(arr.length==0)
        console.log("手机支付");
    else if(arr.length==1)
        console.log("现金支付");
    else
        console.log("刷卡支付");
}
pay(100);
pay();
pay("6553 1234","123456");