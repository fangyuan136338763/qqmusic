class Student{
    constructor(sname,sage){
        this.sname = sname;
        this.sage = sage;
    }
    save(){
        console.log(`正在保存${this.sname}`);
    }
    static getById(id){
        return new Student("Han Meimei","11");
    }
}
var lilei = new Student("Li Lei","12");

lilei.save();
var s101 = Student.getById();
console.log(`找到编号为101的学生为：${s101.sname}`);