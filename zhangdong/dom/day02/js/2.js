// 查找触发事件元素
// 绑定事件处理元素
// 查找要修改的元素
// 修改元素


var selectAll = document.querySelector("table>thead>tr>th:first-child>input");

selectAll.onclick = function(){
    var selects = document.querySelectorAll("table>tbody>tr>td:first-child>input");
    for(var select of selects){
        select.checked = selectAll.checked;
    }
}

var bodySelect = document.querySelector("table>tbody");
bodySelect.onclick = function(e){
    var btn = e.target;
    if(btn.nodeName == "INPUT"){
        var unchecked = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
        if(unchecked==null){
            selectAll.checked = true;
        }else{
            selectAll.checked = false;
        }
    }
}
/* var selects = document.querySelectorAll("table>tbody>tr>td:first-child>input");
for(var select of selects){
    select.onclick = function(){
        var unchecked = document.querySelector("table>tbody>tr>td:first-child>input:not(:checked)");
        console.log(unchecked);
        if(unchecked!=null){
            selectAll.checked = false;
        }
        else{
            selectAll.checked = true;
        }
    }
} */

var delAll = document.querySelector("body>button");
console.log(delAll);

delAll.onclick = function(){
    // var selects = document.querySelectorAll("table>tbody>tr>td:first-child>input");
    for(var select of selects){
        select.checked = false;
        selectAll.checked = false;
    }
}