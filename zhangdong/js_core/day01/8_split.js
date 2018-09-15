/* var str = "136338763@qq.com";

var arr = str.split("@");

// console.log(arr[0],arr[1]);

var html = `
    <li>45</li>
    <li>61</li>
    <li>31</li>
    <li>54</li>
    <li>60</li>
`;

var arr = html.replace(/^\s*<li>|<\/li>\s*$/ig,"")
              .split(/<\/li>\s*<li>/i);
console.log(arr); */

var str = "helloworld";
var arr = [];//定义空关联数组
for(var i=0;i<str.length;i++){//遍历字符串
    var key = str[i];//将当前字母看做key
    if(arr[key]===undefined){//如果没有下标为key的值
        arr[key] = 1;//强行加入值为1的下标为key的值
    }else{//如果有，则执行+1
        arr[key]++;
    }
}
var c,n;//初始c接收key值，n接收value值
for(var key in arr){//for in 遍历关联数组
    if(c===undefined){//第一次循环,c没有值,将key赋值给c,arr[key]赋值给n
        c=key;
        n=arr[key];
    }else{//比较n值，只留大的
        if(arr[key]>n){
            c=key;
            n=arr[key];
        }
    }
}
console.log(`共出现了${n}次${c}`);
