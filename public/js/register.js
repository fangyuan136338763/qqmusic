var inputName = document.getElementsByName("uname")[0];
var inputUpwd = document.getElementsByName("upwd")[0];
var inputPhone = document.getElementsByName("phone")[0];


var regName = /^\d{5,11}$/;
inputName.onblur = function(){
    var inputName = this;
    if(!inputName.value){
        inputName.previousElementSibling.className = "";
        inputName.nextElementSibling.innerHTML =`<img src="img/register/error.png"> 账号不可以为空`;
        inputName.nextElementSibling.className = "error";
    }else if(!(regName.test(inputName.value))){
        inputName.previousElementSibling.className = "";
        inputName.nextElementSibling.innerHTML =`<img src="img/register/error.png"> 请输入5-11位数字`;
        inputName.nextElementSibling.className = "error";
    }else{
        inputName.previousElementSibling.className = "success";
    }
}
inputName.onfocus = function(){
    inputName.nextElementSibling.className = "";
}

var regUpwd = /^\w{8,16}$/;
inputUpwd.onblur = function(){
    var inputUpwd = this;
    console.log(inputUpwd);
    if(!inputUpwd){
        inputUpwd.previousElementSibling.className = "";
        inputUpwd.nextElementSibling.innerHTML =`<img src="img/register/error.png"> 密码不可以为空`;
        inputUpwd.nextElementSibling.className = "error";
    }else if(!(regUpwd.test(inputUpwd.value))){
        inputUpwd.previousElementSibling.className = "";
        inputUpwd.nextElementSibling.innerHTML =`<img src="img/register/error.png"> 长度为8-16个字符`;
        inputUpwd.nextElementSibling.className = "error";
    }else{
        inputUpwd.previousElementSibling.className = "success";
    }
}

inputUpwd.onfocus = function(){
    inputUpwd.nextElementSibling.className = "";
}


user_reg.onclick = function(e){
    e.preventDefault();
    var uname = inputName.value;
    var upwd = inputUpwd.value;
    var phone = inputPhone.value;
    var xhr = new XMLHttpRequest();
    if(regName.test(uname)&&regUpwd.test(upwd)){

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var result = xhr.responseText;
                if(result == "ok"){
                    if(confirm("注册成功，是否跳转到主页?")){
                        location.href = "http://localhost:5000/index.html";
                    }
                }
            }
        }
        xhr.open('post','/user/register',true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        var data = `uname=${uname}&upwd=${upwd}&phone=${phone}`;
        xhr.send(data);
    }else{
        alert("信息不正确，无法注册");
    }
}

