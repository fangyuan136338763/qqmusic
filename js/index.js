var width = 0;
var div = document.getElementsByClassName("sibling-float-item")[0];
function task(){
    var w = parseInt(getComputedStyle(div.parentNode).width)
    width -= w;
    if(width == -3*w){
        width = 0;
        div.style.transition = "0s"
        div.style.left = "0px";
    }else{
        div.style.transition = "1s"
        div.style.left = width+"px";
    }
}
var timer = setInterval(task,2000);
div.onmouseover = function(e){
    var img = e.target;
    if(img.nodeName == "IMG"){
        clearInterval(timer);
    }
}
div.onmouseout = function(e){
    var img = e.target;
    if(img.nodeName == "IMG"){
        timer = setInterval(task,2000);
    }
}
console.log(banner.children);