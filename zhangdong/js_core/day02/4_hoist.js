var b = 10;
function fun(){
    console.log(b);
    var b = 100;
    b++;
    console.log(b);
}
fun();
console.log(b);

var fn = function(){console.log(1);}
fn();
var fn = function(){console.log(2);}
fn();
var fn = 100;
fn();