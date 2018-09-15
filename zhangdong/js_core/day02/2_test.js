var pwd = "1234567";

var reg = /^\d{6}$/;
if(reg.test(pwd)){
    console.log("密码正确");
}else{
    console.log("密码格式不正确");
}