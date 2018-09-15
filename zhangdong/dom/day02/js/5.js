var txtName = document.getElementsByName("username")[0];
var txtPwd = document.getElementsByName("pwd")[0];
// console.log(txtName,txtPwd);

// 绑定事件处理函数
txtName.onfocus = txtPwd.onfocus = function(){
    this.className = "txt_focus";
    var div = this.parentElement.nextElementSibling.children[0];
    div.className = "";
}
txtName.onblur = function(){
    vali(this,/^\w{1,10}$/);
}
function vali(txt,reg){
    var pass = reg.test(txt.value);
    var div = txt.parentElement.nextElementSibling.children[0];
    if(pass){
        div.className = "vali_success";
    }else{
        div.className = "vali_fail";
    }
}
txtPwd.onblur = function(){
    vali(this,/^\d{6}$/);
}