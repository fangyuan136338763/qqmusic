var table = document.getElementById("data");

var btns = table.getElementsByTagName("button");
console.log(btns);
for(var btn of btns){
    btn.onclick = function(){
        var span = this.parentElement.children[1];
        var n = span.innerHTML;
        if(span == this.previousElementSibling){
            n++;
        }else if(n>1){
            n--;
        }
        span.innerHTML = n;

        var td = this.parentElement.nextElementSibling;

        var price = this.parentElement.previousElementSibling.innerHTML.slice(1);

        var sub = price*n;

        td.innerHTML = `￥${sub.toFixed(2)}`;

        var Tds = table.querySelectorAll("table tbody tr td:last-child");
        console.log(lTd);
        var lTd = table.querySelector("table tfoot tr td:last-child");
        console.log(Tds);
        // var Total = Tds.innerHTML.slice(1);
        var total = 0;
        for(var tdTol of Tds){
            total += parseFloat(tdTol.innerHTML.slice(1));
        }
        lTd.innerHTML = `￥${parseFloat(total)}`;
    }
}