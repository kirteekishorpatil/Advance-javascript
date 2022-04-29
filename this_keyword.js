const thapa={
    name:"vinod thapa",
    qualification:"MCS",
    sum:function(){
        var add=2+2;
        console.log("sum of two no.is"+add)
        console.log(this.name)
        console.log(this)
    }
}
thapa.sum();
// this represent owner of the object

// function sum(){
//     var add=2+2;
//     console.log("sum of two no.is"+add)
//     console.log(this)
// }
// sum();
// in This function this referse to globle object
 
// "use strict"
// function sum(){
//         var add=2+2;
//         console.log("sum of two no.is"+add)
//         console.log(this)
//     }
// sum();
// in a function in strict mode,this is undefined

// var num=10;
// var result=((num%2)==0)?"even":"odd";
// console.log(result)

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       console.log(this.firstName + " " + this.lastName);
//       console.log(this.firstName)
//       console.log(this)
//       return this
//     }
//   };
// person.fullName();


