//Primitivo inmutable https://platzi.com/clases/8617-javascript-fundamentos/66439-tipos-de-datos-mutabilidad-e-inmutabilidad/?time=232

let numero = 23
numero = numero + 1
console.log(numero)

var esVerdadero = true
esVerdadero = false
console.log(esVerdadero)
//sabemos que el valor original se mantiene y ell valor nuevo es una copia


// Tipo de dato complejo - Mutable
let usuario = {nombre: 'pepito', edad:15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)


function cambiarNombre (objeto){
objeto.nombre = 'nuevo nombre'
}

let persona = {nombre : 'Antonio'}

cambiarNombre(persona)
console.log(persona)