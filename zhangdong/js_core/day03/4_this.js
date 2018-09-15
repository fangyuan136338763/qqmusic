var lilei={
    sname: "Li Lei",
    sage: 11,
    intr: function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);
    }
}
var hmm = {
    sname: "Han Meimei",
    sage: 12
}

hmm.intr = lilei.intr;
hmm.intr();
lilei.intr();

function clone(obj){
    var newobj = new Object();
    for(var key in obj){
        newobj[key]=obj[key];
    }
    return newobj;
}
var lilei2 = clone(lilei);
lilei.sage++;
console.log(lilei);
console.log(lilei2);
console.log(lilei==lilei2);