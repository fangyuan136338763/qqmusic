user_reg.onclick = function(e){
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    var uname = document.getElementsByName("uname")[0].value;
    var upwd = document.getElementsByName("upwd")[0].value;
    var phone = document.getElementsByName("phone")[0].value;
    console.log(uname,upwd,phone);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var result = xhr.responseText;
            console.log(result);
        }
    }
    xhr.open('post','/user/register',true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var data = `uname=${uname}&upwd=${upwd}&phone=${phone}`;
    console.log(data);
    xhr.send(data);
}

