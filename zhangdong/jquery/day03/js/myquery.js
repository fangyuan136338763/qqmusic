jQuery.fn.sum = function(){
    var $elems = this;
    var sum = 0;
    for(var elem of $elems){
        sum += parseFloat(elem.innerHTML);
    }
    return sum;
}