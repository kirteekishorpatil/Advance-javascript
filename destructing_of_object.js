// this is the first type of object destructing
// const dic={
//     Name:"kirtee",
//     age:18,
//     deg:"nothing"
// }

// let {Name,age,deg}=dic;
// console.log(`my name is ${Name} my age is 
// ${age} and my degree is ${deg}.`);


// thos is the second type of object destructing
// const dic={
//     Name:"kirtee",
//     age:18,
//     deg:"nothing"
// }

// let Name,age,deg;
// ({Name,age,deg}=dic);
// console.log(`my name is ${Name} my age is 
// ${age} and my degree is ${deg}.`);

// we can use this also for object destructing
// const dic1={
//     name:"kirtee",
//     age:18,
//     colour:"black",
// }
// let {name:myname,age:ages,colour:colours}=dic1;
// console.log(`my name is ${myname} my age is ${ages},
// and my fev colour is ${colours}`)

// const dic1={
//     name:"kirtee",
//     age:18,
//     colour:"black",
//     hobbies:{
//         first:"plyaing kho-kho and kabbadi",
//         sec:"coking"
//     }
// }
// let {name:myname,age:ages,colour:colours,hobbies}=dic1;
// console.log(`my name is ${myname} my age is ${ages},
// and my fev colour is ${colours} i love ${hobbies.first}`)


// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
//   };
//   const { enemies } = hero;
//   enemies //undefined

// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
//   };
//   const { realName: secretName } = hero;
//   console.log(secretName)
r