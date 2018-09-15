document.getElementById("content1").style.zIndex = "10";

// var tabs = document.querySelectorAll("[data-toggle=tab]");
var tabs = document.getElementsByClassName("tabs")[0];
console.log(tabs);
tabs.onclick = function(e){
    e.preventDefault();
    var btn = e.target;
    console.log(btn);
    if(btn.nodeName == "A"){
        console.log(tab)
        var divs = document.querySelectorAll("#container>div");
        // console.log(divs);
        for(var div of divs){
            div.style.zIndex = "";
        }
        // var id = this.getAttribute("data-target");
        var id = btn.dataset.target;
        // console.log(id);
        document.querySelector(id).style.zIndex = "10";
    }
}
// console.log(tabs);
/* for(var tab of tabs){
    tab.onclick = function(e){
        e.preventDefault();
        console.log(tab)
        var divs = document.querySelectorAll("#container>div");
        // console.log(divs);
        for(var div of divs){
            div.style.zIndex = "";
        }
        // var id = this.getAttribute("data-target");
        var id = this.dataset.target;
        // console.log(id);
        document.querySelector(id).style.zIndex = "10";
    }
} */