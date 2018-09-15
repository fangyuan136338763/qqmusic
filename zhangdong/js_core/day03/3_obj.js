var lilei={
    sname: "Li Lei",
    sage: 11,
    intr: function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}`);
    }
}
console.log(lilei.sage);
lilei.intr();
lilei.sage++;
console.log(lilei.sage);
lilei.intr();
