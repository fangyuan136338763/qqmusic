function Student(sname,sage){
    this.sname = sname;
    this.sage = sage;
}
Student.prototype.save = function(){
    console.log(`正在保存${this.sname}`);
}
Student.getById = function(id){
    return new Student("Han Meimei","11");
}
var lilei = new Student("Li Lei","12");

lilei.save();
Student.getById();