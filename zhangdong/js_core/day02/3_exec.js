var str = "老师：请用小红，我的，朋友造句。小明：小红是我的朋友。小亮说：朋友，小红是我的！";

var reg = /小[\u4e00-\u9fa5]/g;

do {
    var arr = reg.exec(str);
    if (arr != null) {
        var i = arr["index"];
        var kw = arr[0];
        console.log(`在位置${i}处找到关键字${kw}`);
    }
} while (arr != null);