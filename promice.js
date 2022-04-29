// function func1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error=true;
//             if (!error){
//             console.log("sir your food is ready")
//             resolve();
//             }
//             else{
//                 console.log("sir your food is not ready")
//                 reject("sorry sir");
                
//             }

//         },2000)
//     })
// }
// func1().then(function(){
//     console.log("thanks for coming")
// }).catch(function(error){
//     console.log("sorry for this"+" " + error)
// })

// function promo(a,b){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             var c=a+b;
//             if (a,b){
//                 resolve("your request is succesfully resolve")
//             }
//             else{
//                 reject("your promiss is reject")
//             }
//         },2000);
//     })
// }promo(3,6).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log("error")
// })

