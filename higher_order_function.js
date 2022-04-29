const intervieQuetion=(name)=>{
    if (name==="Aabiru"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic} please explain as`)
        }
    }
    if (name=="jabina"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic} please explain as`)
        }
    }
    if (name=="kirtee"){
        return function(topic){
            console.log(`hii ${name}.what is the ${topic} please explain as`)
        }
    }
    else{
        return function(){
            console.log("Welcome to intervie")
        }
    }
}
intervieQuetion("Aabiru")("Api");
intervieQuetion("jabina")("promise");
intervieQuetion("kirtee")("callback");