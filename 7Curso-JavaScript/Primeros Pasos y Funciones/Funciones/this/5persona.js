// Nivel Basico Implicito
let persona = {
nombre: "Andres",
presentarse: function (){
    console.log(`mi nombre es ${this.nombre}`)
}
}
persona.presentarse()


// Nivel Intermedio

function miFuncion(){
    console.log(this)
}
miFuncion()

let objeto = {
    miFuncion: miFuncion
}
objeto.miFuncion()