var width = 0;
var div = document.getElementsByClassName("sibling-float-item")[0];
var w = parseInt(getComputedStyle(div.parentNode).width)
function task(){
    width -= w;
    console.log(width);
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
var leftDiv = document.querySelector("#banner>div.left");
var rightDiv = document.querySelector("#banner>div.right");
leftDiv.onclick = function(){
    var nleft = getComputedStyle(div).left
    console.log(nleft);
    div.style.left =  parseInt(nleft) - w + "px";
}
rightDiv.onclick = function(){
    var nleft = getComputedStyle(div).left
    console.log(nleft);
    div.style.left = parseInt(nleft) + w +"px";
}