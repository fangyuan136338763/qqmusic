/* window.onload = function(){
    var input = document.getElementById("input");
    input.onfocus = function () {
        var div = input.nextElementSibling;
        div.style.height = "165px";
    }
    input.onblur = function () {
        div.style.height = "0";
    }
} */

    


/* (function(){
    var btnLogin = document.getElementsByClassName("btn")[0].firstElementChild;
    var loginPage = document.getElementById("login");
    btnLogin.onclick = function(){
        var style =getComputedStyle(loginPage);
        if(style.display == "block"){
            loginPage.style.display = "none";
        }else{
            loginPage.style.display = "block";
        }
    }
    var close = document.querySelector("#login>div.top>span:last-child>a");
    close.onclick = function(){
        console.log(close);
        loginPage.style.display = "none";
    }
})(); */