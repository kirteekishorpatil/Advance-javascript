// const dictio1={
//     Name:"kirtee",
//     Hobbie:"Drawing and Dancing",
//     Fevcolour:"Black",
//     Play:"Kho-Kho and kabbadi",
//     features:function(age,collification){
//         console.log(`My name is ${this.Name} my hobbies i like to 
// ${this.Hobbie} my fevorite colour is ${this.Fevcolour} i like to play ${this.Play} 
// my age is ${age} and i complited my ${collification}`)
//     }
// }
// const dictio2={
//     Name:"Kanchan",
//     Hobbie:"Dancing and cokking",
//     Fevcolour:"Pink",
//     Play:"Badminteen",
// }
// dictio1.features.apply(dictio2,[16,"12th"])

const perso1={name:"kirtee",age:18}
const perso2={name:"kishori",age:22}
function say(gretig){
    console.log(gretig + ' ' + this.name + ' ' + this.age)
}
say.apply(perso1,["hellow"])
say.apply(perso2,["hellow"])

