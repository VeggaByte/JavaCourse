const greeting = function (name){
    return `hi , ${name}`
}


// funcion flecha explicita
const newgreeting = (name) =>{
    return `hi , ${name}` // explicito significa cuando nosotros le decimos que hacer al programa, es ecir return
}


// Funcion Flecha - retorno implicito

const newGreetingImplicit = name => `hi , ${name}`


// implicit two parametres

const newGreetingImplicit2parametrers = (name, lastName) => `hi , ${name}` `hi , ${lastName}`