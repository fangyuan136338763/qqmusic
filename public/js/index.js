window.onload = function(){
    $.ajax({
        url: "http://localhost:5000/index",
        type: "get",
        dataType: "json",
        success:function(result){
            var arr = result;
            // console.log(arr);
            var arrNew = [];
            for(var i=0;i<6;i++){
                arrNew.push([]);
                for(var j=0;j<3;j++){
                    arrNew[i].push(arr.slice(i*15+j*5,i*15+(j+1)*5));
                }
            }
            // console.log(arrNew);
            var html = '';
            for(var i=0;i<arrNew.length;i++){
                html += `<div class="sibling-float-item" id="content${i+1}">`;
                for(var j=0;j<arrNew[i].length;j++){
                    html += `<ul class="pic" id="pic">`;
                    for(var m of arrNew[i][j]){
                        html += `<li>
                                    <a href="http://localhost:5000/details.html?cid=${m.cid}" class="img"><img src=${m.src}></a>
                                    <p><a href="#">${m.details}</a></p>
                                    <p>播放量：${m.play_counts}</p>
                                </li>`;
                    }
                    html += `</ul>`;
                }
                html += `</div>`;
            }
            var banner_parent = $("#banner div:nth-child(3)");
            banner_parent.html(html);
           
            
            // 歌单推荐轮播
            (function(){
                    // 轮播图
                    var width = 0;
                    var aNode = document.querySelector("#banner>ul>li>a[class=active]");
                    var id = aNode.getAttribute("data-toggle");
                    var div = document.querySelector(`${id}`);
                    var w = parseInt(getComputedStyle(div.parentNode).width)
                    // console.log(width,aNode,id,div,w);
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
                        // console.log(id)
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
                // 轮播图
            })();
            // 歌单推荐轮播
            // 立体轮播
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
                    // console.log(e.target.nodeName);
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
            // 立体轮播
        }
        
    })
}


