var data = {
    title1: "跑男",
    title2: "爸爸",
    title3: "极限"
};

function getNodes(parent){
    console.log(parent);
    for(var i=0;i<parent.children.length;i++){
        // console.log(parent.children[i]);
        arguments.callee(parent.children[i]);
    }
}
window.onload = function(){
    var body = document.body;
    getNodes(body);
}