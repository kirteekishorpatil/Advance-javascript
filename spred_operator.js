// function sum(a,b,c){
//     console.log(a+b+c)
// }
// var array1=[5,5,3]
// sum(...array1)  
// // o\p 13

// function sum(a,b,c){
//     console.log(a+b+c)
// }
// var array1=[5,5,3]
// console.log(...array1)
// console.log(array1)
// sum(...array1)
// o\p 
// 5,5,3
// [5,5,3]
// 13

// in a simple way concatination
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// arr1=arr1.concat(...arr2)
// console.log(arr1)


// using spread operator concatination
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
// arr1=[...arr1,...arr2,...arr3]
// console.log(arr1)

// replace copy()
// using spread operetor
// let arrC1=[1,2,3]
// let arrC2=[...arrC1,4,5]
// console.log(arrC1)
// console.log(arrC2)                            


// let arrC1=[1,2,3]
// let arrC2=[0,5,...arrC1,4,5]
// console.log(arrC1)
// console.log(arrC2)

// let arr1=[1,4,3,2];
// let arr2=[3,4,6,3];
// let arr3=[4,6,8,9];
// let arr4=[...arr1,...arr2,...arr3]
// console.log(arr4)
// let a=arr4.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue
// })
// console.log(a)

// let d=[1,3,5];
// let n=[5,7,8];
// let c=[...d,9,6,7,...n]
// console.log(c)

// let a=[3,2,1];
// let b=[2,1,2];
// let c=[4,2,1];
// let d=[...a,...b,...c];
// let s=d.reduce((accumulater,currenvalue)=>{
//     return accumulater*currenvalue
// });
// console.log(s)

// let a=[3,2,1];
// let b=[2,1,2];
// let c=[4,2,1];
// let d=[...a,...b,...c];
// let s=d.reduce((accumulater,currentvalue)=>{
//     return accumulater/currentvalue
// });
// console.log(s)

const array1 = ['a', 'b', 'c'];
array1.forEach (element => console.log(element));
