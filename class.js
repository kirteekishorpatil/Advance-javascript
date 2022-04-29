// class Employee {
//     constructor(givenName,givenExperience,givenDivision){
//     this.name=givenName;
//     this.experience=givenExperience;
//     this.division=givenDivision;
//     }
// }
// herry=new Employee("kirtee",15,"Division");
// console.log(herry)


// class Employee {
//     constructor(givenName,givenExperience,givenDivision){
//     this.name=givenName;
//     this.experience=givenExperience;
//     this.division=givenDivision;
//     }
//     slogun(){
//         return `i am ${this.name} and this company is the best`;
//     }
//     joiningyear(){
//         return 2020-this.experience;
//     }
//     static add(a,b){
//         return a+b
//     }
// }
// class programmer extends Employee{
//     constructor(givenName,givenExperience,givenDivision,givenlanguage,givengitub){
//         super(givenName,givenExperience,givenDivision);
//         this.language=givenlanguage;
//         this.gitub=givengitub;
//     }
//     fevoirtelanguage(){
//         if (this.givenlanguage=="python"){
//             return "python"
//         }
//         else{
//             return "javascript"
//         }
//     }
//     static multiply(a,b){
//         return a*b
//     }
// }
// herry=new Employee("kirtee",15,"Division");
// console.log(herry)
// console.log(herry.slogun())
// console.log(herry.joiningyear());
// console.log(Employee.add(34,45))
// new1=new programmer("Kanchan",3,"Lay","hindi","kanchan4352")
// console.log(new1)
// console.log(new1.fevoirtelanguage())
// console.log(programmer.multiply(3,6))

// function Person(name1) {
//     this.name = name1;
// }
// Person.prototype.getName = function () {
//     return this.name;
// };
// var john = new Person("John Doe");
// console.log(john.getName());