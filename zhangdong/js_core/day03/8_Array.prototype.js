Array.prototype.sum = function(){
    var total = 0;
    for(var i=0;i<this.length;i++){
        total += ParseFloat(this[i]);
    }
    return total;
}

var arr1 = [1,2,3,4,5];
var arr2 = [5,6,7,8,9];
var sum1 = arr1.sum();
var sum2 = arr2.sum();
console.log(sum1,sum2);