var msg = "我去，你家真大";

if(msg.search(/我\s*([草艹槽操]|cao)/i) != -1)
    console.log("包含敏感字，无法发送");
    else{
        console.log("刘胜强说："+msg);
    }