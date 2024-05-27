// slice toma uyna porcion de un array y crea una copia superficias;l, especificada por indices de inicio a fin(no incluido)
// no modifica array original
//slice()
const animales = ['hormiga','camello','bisonte','pato','elefante']

// obten solo una fraccion de animales

console.log(animales.slice(2)) // muestra desde el 2 en adelante, el fin debes definirlo si no te mostrara todo.

console.log(animales.slice(2,4)) // en este caso el 4 seria pato porqu el final siempre se le resta 4-1

console.log(animales.slice(2,5)) // en este caso el 4 seria pato porqu el final siempre se le resta 4-1

console.log(animales.slice(-2)) // empieza desde atras desde -1

console.log(animales.slice(2,-4))







