// var myName="kumar"; // global scope
// function sayHi(){
// console.log(myName);
// var frdsName="Pavan";
// // local scope or function scope
// console.log(frdsName);
// }
// sayHi();
// console.log(myName);
// console.log(frdsName);

// var myName="kumar";
// function sayHi(){
// console.log(myName);
// var frdsName="Pavan";
// console.log(frdsName);
// }
// sayHi();

// var a,b;
// [a,b]=[2,3]
// console.log([a,b]);
// 2 3

// const myCampus = (campus) =>{
//     console.log(`My campus is ${campus}`);
//     }
//     myCampus("Sarjapur")

// const myMarks= [1,4,6,8,10]
// myMarks.forEach((e) => console.log(e*2))

// let arraya=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         var a=12;
//         if(a==12){
//             resolve(a)
//         }
//         else{
//             reject("error")
//         }
//     })
// })
// }).then((a)=>{
//     console.log(a)
// }).catch((error)=>{
//     console.log("error")
// })


// const funcA=(a,b)=>{
//     setTimeout(function(){
//         console.log("welcome function A")
//         b();
//     })
// }
// const funcB=()=>{
//     console.log("welcome to function B")
// }
// funcA(5,funcB)
// funcB()

// let a=[2,5,3];
// let b=[1,4,4];
// let c=[2,4,3];
// console.log([...a,...b,...c])

// function sum(x, y, z) {
//     console.log(x)
//     console.log(y)
//     console.log(z)

// }
  
// const numbers = [1, 2, 3];
// const number1=[2,5,3,6,5];
  
// sum(...numbers,...number1);

// const funA=(b,c)=>{
//     console.log(2*3)
//     c();
// }
// const FunG=()=>{
//     console.log("funcG is starting")
// }
// funA(4,FunG)


// const func=(name)=>{
//     if (name==="kirtee"){
//         return function(topic){
//         console.log(`my name is ${name} and my topic name is ${topic}`)
//         }
//     }
//     if (name==="karina"){
//         return function(topic){
//             console.log(`my name is ${name} and my topic name is ${topic}`)
//         }
//     }
//     if (name==="chaya"){
//         return function(topic){
//             console.log(`my name is ${name} and my topic name is ${topic}`)
//         }
//     }
//     else{
//         return function(){
//             console.log("its rong now")
//         }
//     }
// }
// func("kirtee")("api")
// func("karina")("function")
// func("chaya")("data type")

// function promo(a,b){
//     return new Promise((resolve)=>{
//         var c=a+b;
//         setTimeout(()=>{
//             if (a,b){
//                 resolve("your promise in succesfully resolve")
//             }
//             else{
//                 reject("your promise is reject")
//             }
//         },3000);
//     })
// }
// promo(3,5).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log("error")
// })

// function promo(a,b){
//     return new Promise((resolve)=>{
//         var c=a+b;
//         setTimeout(()=>{
//             if (a,b){
//                 resolve("your promise in succesfully resolve")
//             }
//             else{
//                 reject("your promise is reject")
//             }
//         },3000);
//     })
// }
// async function num(){
//     console.log("nothing")
//     const c=await promo(3,5)
//     console.log(c)
// }
// num();

