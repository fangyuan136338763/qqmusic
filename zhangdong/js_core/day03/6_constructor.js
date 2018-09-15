//定义所有学生的统一结构：
function Student(sname,sage){
    this.sname = sname;
    this.sage = sage;
    this.intr = function(){
        console.log(`I'm ${this.sname},I'm ${this.sage}!`);
    }
}

var lilei = new Student("lilei",11);
var hmm =new Student("Han Meimei",12);
console.log(lilei);
console.log(hmm);
lilei.intr();
hmm.intr();