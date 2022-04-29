
// function sum(a,b){
//     s=2*4;
//     console.log(s)
//     b();
// }
// function sum2(){
//     console.log("sum is",s);
// }
// sum(5,sum2)

const { required } = require("nodemon/lib/config");

// const FunA=(a,b)=>{
//     setTimeout(function(){
//         console.log("Welcome function A")
//         b()
//     },3000);
// }
// const FunB=()=>{
//     console.log("Welcome function B")
// }
// FunA(5,FunB)
// FunB()


// function even(n,d){
//     var s=[]
//     for (i=0;i<n.length;i++){
//         if (n[i]%2==0){
//             s.push(n[i])
//         }
//     }
//     d()
// console.log(s)
// }
// function odd(){
//     var j=[]
//     var list=[1,4,3,6,5]
//     for (i=0;i<list.length;i++){
//         if (list[i]%2!==0){
//             j.push(list[i])
//         }
//     }
// console.log(j)
// }
// even([2,6,4,3,8,9,//     var j=[]
//     for (i=0,i<n.lenght,i++){
//         if (n[i]%2==0){
//             j.push(i)
//         }
//     }
// console.log(j)
// }
// even()5],odd)

// function funA(a,b){
//     c=2*3
//     b()
// }
// function sum2(){
//     console.log("sum is",c)
// }
// funA(5,sum2)

// var s=require("readline-sync")
// function funcA(number,Name){
//     var i=1
//     while (i<=number){
//         console.log("hello",p)
//         p=s.question("enter the name")
//         Name()
        // console.log("hello",p)
//     i++
// }
// }
// function funcB(){
    // console.log("hello",p)
// }
// funcA(3,funcB)
// console.log("hello",p)

// var a=null;
// console.log(typeof(a));

// var a=12;
// b=9
// console.log(b);

// var a=12;
// var b=12;
// var c=a==b;
// console.log(c)

// var a=12;
// var b=12;
// var c=a===b;
// console.log(c)

// function sum(a,b){
//     console.log("function is starting")
//     b()
// }
// function sum2(){
//     console.log("function is closing")
// }
// sum(5,sum2)


// function great(name,education){
//     console.log("my name is",name);
//     education()
// }
// function callMe(){
//     console.log("i am callback function")
// }
// great("kirtee",callMe)

// function great(name,education){
//     setTimeout(() => {
//         console.log("my name is",name)
//         education()
//     },2000);
// }
// function great1(){
//     console.log("callback is starting now")
// }
// great("kirtee",great1)

// function great(name,education){
//     console.log("my name is kirtee and your name")
//     // callback function
//     // executed only after the greet() is executed
//     education(name)
// }
// function great1(name){
//     console.log("and my name is",name)
// }
// //calling the function after 2 seconds
// setTimeout(great,2000,"neha",great1)

function greate(name,education){
    console.log("function is starting")
    education(name)
}
function greting(name){
    console.log("my name is",name)
}
greate("kajal",greting)

