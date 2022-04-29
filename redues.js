let list=[4,3,2,1,9,2,4];
let list1=list.reduce((accumulator,currentvalue)=>{
    return accumulator-currentvalue
});
console.log(list1)

class Employee{
    constructor(givenaName,givenColur,givenAge){
    this.name=givenaName;
    this.colur=givenColur;
    this.age=givenAge;
    }
}
herry=new Employee("kirtee","Black",23)
console.log(herry)

