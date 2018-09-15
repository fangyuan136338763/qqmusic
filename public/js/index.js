// 轮播图
(function(){

    var width = 0;
    var aNode = document.querySelector("#banner>ul>li>a[class=active]");
    var id = aNode.getAttribute("data-toggle");
    var div = document.querySelector(`${id}`);
    var w = parseInt(getComputedStyle(div.parentNode).width)
    function task(){
        var aNode = document.querySelector("#banner>ul>li>a[class=active]");
        var id = aNode.getAttribute("data-toggle");
        var div = document.querySelector(`${id}`);
        width -= w;
        if(width <= -3*w){
            width = 0;
            div.style.transition = "0s"
            // div.style.left = "0px";
            // task();
        }else{
            div.style.transition = "2s"
        }
        div.style.left = width+"px";
    }
    task();
    var timer = setInterval(task,3000);
    
    div.onmouseover = function(e){
        var img = e.target;
        if(img.nodeName == "IMG"){
            clearInterval(timer);
            timer = null;
        }
    }
    div.onmouseout = function(e){
        var img = e.target;
        if(img.nodeName == "IMG"){
            timer = setInterval(task,3000);
        }
    }
    var leftDiv = document.querySelector("#banner div.left");
    var rightDiv = document.querySelector("#banner div.right");
    var iconDiv = document.querySelector("#banner div.icon")
    iconDiv.onmouseover = function(){
        clearInterval(timer);
        timer = null;
    }
    iconDiv.onmouseout = function(){
        timer = setInterval(task,3000);
    }
    leftDiv.onclick = function(){
        var aNode = document.querySelector("#banner>ul>li>a[class=active]");
        var id = aNode.getAttribute("data-toggle");
        console.log(id)
        var div = document.querySelector(`${id}`);
        var nleft = getComputedStyle(div).left;
        nleft  = parseInt(nleft);
        // console.log(nleft);
        if(nleft <= -2400){
            nleft = 1200;
        }
        div.style.left = nleft - w + "px";
    }
    
    
    rightDiv.onclick = function(){
        var aNode = document.querySelector("#banner>ul>li>a[class=active]");
        var id = aNode.getAttribute("data-toggle");
        var div = document.querySelector(`${id}`);
        var nleft = getComputedStyle(div).left;
        nleft = parseInt(nleft);
        if(nleft >= 0){
            nleft = -3600;
        }
        div.style.left = nleft + w +"px";
    }
    
    var ul = document.querySelector("#banner ul:nth-child(2)");
    ul.onclick = function(e){
        e.preventDefault();
        if(e.target.nodeName == "A"){
            var aNodes = ul.querySelectorAll("#banner ul:nth-child(2) a");
            for(var aNode of aNodes){
                // console.log(aNode);
                // console.log(aNode.className)
                aNode.className = "";
            }
            e.target.className = "active";
            var id = e.target.getAttribute("data-toggle");
            var contents = document.querySelector("#banner div.sibling-float").children;
            // console.log(contents);
            for(var content of contents){
                content.style.display = "none";
            }
            var contentId = document.querySelector(`#banner ${id}`);
            contentId.style.display = "block";
        }
    }
})();
// 轮播图
// 新歌首发
/* var banner_list = document.querySelector("#small_banner>ul.banner-list");
console.log(banner_list);
banner_list.onclick = function(e){
    var div = e.target;
    // e.preventDefault();
    console.log(div);
    if(div.nodeName == "DIV"){
        var li = div.parentNode;
        li.style.animation = "amt 2s";
    }
} */
// 新歌首发
(function(){
    var prev = document.querySelector("#recommend>.icon div.left");
    var lis = document.querySelectorAll("#recommend div.carousel>ul>li");
    var arr = ["left2","left1","king","right1","right2"];
    var next = document.querySelector("#recommend>.icon div.right");
    function task(){
        arr.unshift(arr.slice(-1)[0]);
        arr.pop();
        for(var key in arr){
            lis[key].className = arr[key];
        }
    }
    next.onclick=function(){
        arr.push(arr.slice(0,1)[0]);
        arr.shift();
        for(var key in arr){
            // console.log(lis);
            lis[key].className = arr[key];
        }
    }
    next.onmouseover = function(){
        clearInterval(timer);
    }
    next.onmouseout = function(){
        timer = setInterval(task,2000);
    }
    prev.onclick = function(){
        arr.unshift(arr.slice(-1)[0]);
        arr.pop();
        for(var key in arr){
            lis[key].className = arr[key];
        }
    }
    prev.onmouseover = function(){
        clearInterval(timer);
    }
    prev.onmouseout = function(){
        timer = setInterval(task,2000);
    }
    var timer = setInterval(task,2000);
    lis[0].parentNode.onmouseover = function(e){
        console.log(e.target.nodeName);
        if(e.target.nodeName == "IMG"){
            clearInterval(timer);
            timer = null;
        }
    }
    lis[0].parentNode.onmouseout = function(e){
        if(e.target.nodeName == "IMG"){
            timer = setInterval(task,2000);
        }
    }
})();

// 导入头部
/* $(function(){
    var $link = $(`<link rel="stylesheet" href="css/header.css">`);
    $link.appendTo("head");
    $.ajax({
        url:"header.html",
        type: "get",
        success: function(res){
            $(res).replaceAll("#header");
        }
    });
    var $linkFoot = $(`<link rel="stylesheet" href="css/footer.css">`);
    $linkFoot.appendTo("head");
    $.ajax({
        url: "footer.html",
        type: "get",
        success: function(res){
            $(res).replaceAll("#footer");
        }
    });
});

window.onload = function(){
    var input = document.getElementsByClassName("input")[0];
    var div = input.nextElementSibling;
    input.onfocus = function () {
        div.style.height = "165px";
    };
    input.onblur = function () {
        div.style.height = "0";
    }
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
}; */
