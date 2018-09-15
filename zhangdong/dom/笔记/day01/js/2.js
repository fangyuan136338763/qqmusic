var data={
  title1:"跑男",
  title2:"极限",
  title3:"爸爸"
}

var elems=[/*
  "{{title1}}":<li>{{title1}}</li>,
  "{{title2}}":<li>{{title2}}</li>,
  "{{title3}}":<li>{{title3}}</li>
*/];
//获得任意父元素parnet的所有后代元素
function getChildren(parent){
  //console.log(parent);
  if(parent.innerHTML.startsWith("{{")
      &&parent.innerHTML.endsWith("}}")){
    elems[parent.innerHTML]=parent;
  }
  //仅遍历parent元素的直接子元素
  for(var i=0;i<parent.children.length;i++){
    //对每个子元素调用和父元素完全相同的操作
    arguments.callee(parent.children[i])
  }
}
window.onload=function(){
  getChildren(document.body)
  console.log(elems);
}
setInterval(function(){
  for(var dKey in data){
    for(var eKey in elems){
      //如果elems中有当前元素
      if(elems[`{{${dKey}}}`]!==undefined)
        //将当前元素的内容替换为data中当前属性的值
        elems[`{{${dKey}}}`].innerHTML=
          data[dKey];
    }
  }
},20)