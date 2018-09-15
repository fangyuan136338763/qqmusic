/* for(var i=0;i<5;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },j*1000)
    })(i)
}
console.log(i); */

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}