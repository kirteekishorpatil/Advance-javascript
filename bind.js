// const dicc1={
//     Name:"Aabiru",
//     Age:16,
//     Hobbie:"Dancing and cooking",
// }
// const dicc2={
//     Name:"Kirtee",
//     Age:18,
//     Hobbies:"Playing and drawing",
// }
// const dicc3={
//     Name:"Neha",
//     Age:19,
//     Hobbies:"Drawing and cooking",
// }
// function features(reting,game){
//     console.log(`my name is ${this.Name} my age is ${this.Age} 
// and hobbies i like to ${this.Hobbie} and your rating is=${reting} 
// and my fevorite game is ${game}`)
// }
// const you1=features.bind(dicc1)
// you1(6,"loodo")
// const you2=features.bind(dicc1)
// you2(4)
// const you3=features.bind(dicc1)
// you3(9)
// const you4=features.bind(dicc1)
// you4(7)

// const mysalf={
//     name:"Kirtee",
//     sarname:"Patil",
//     father_name:"kishor",
//     age:18,
//     education:"12th compleated"
// }
// const mysalf1={
//     name:"Anjali",
//     sarname:"Singh",
//     father_name:"Pravin",
//     age:19,
//     education:"2 nd year" 
// }
// const mysalf2={
//     name:"Ankita",
//     sarname:"Kumari",
//     father_name:"Devanad",
//     age:20,
//     education:"2 nd year" 
// }
// function about(Animal,Game){
//     console.log(`my name is ${this.name} sarname ${this.sarname} 
//     my father name is ${this.father_name} my age is ${this.age} 
//     about my collification so i just compleated my ${this.education}
//     my fevoirete animal is ${Animal} and i like to play ${Game}`)
// }
// const about1=about.bind(mysalf2)
// about1("Dog","Kho-Kho")

const perso1={name:"kirtee",age:32}
const person2={name:"kajal",age:44}
function say(){
    console.log('Hellow' + ' ' + this.name + ' ' + this.age)
}
sayhii1=say.bind(perso1)
sayhii2=say.bind(person2)
sayhii1()
sayhii2()