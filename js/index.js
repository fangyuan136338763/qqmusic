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