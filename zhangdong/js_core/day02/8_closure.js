//定义外层函数包裹变量和内层函数
function outer(){
    var i = 1;
    return function(){//外层函数返回内层函数到外部
        console.log(i++);
    }
}
//使用者调用外层函数，获得内层函数对象，保存在变量中反复使用
var getNum = outer();
getNum();
getNum();
i=0;
getNum();
getNum();
