//funciones puras. 1. le damos una misma entrada y tenemos una misma salida 2. No producen efectos secundarios(Side efects)

// Side Effects
// 1. Modificar variables globales. si hace esto ya no es pura
// 2. Modificar parametros de una funcion. esto hace que no sea pura
// 3. llamados a Apis o HTTP causaria efectos por lo cuial no es pura
// 4. Impresion de mensajes tambein seria ocacion de no ser puras
// 5. Manipulacion del DOOM
// 6. Obtener la hora actual

// Funcion Pura

function sum (a , b) {
    return a+b
}
// se reciben mismos parametros y misma salida y no hay nada de lo anterior mencionado 



//Funcion Impura
function sum (a , b) {
    console.log('A: ', a)
    return a+b
}
// esta es impura porque no cumple con la regla num 4




//funcion impura
let total = 0
function sumWhitSideEffect (a) {
total += a
return total
}



//Funcion Pura
function square (x) {
    return x*x
}



function addTen (y) {
    return y + 10
}


const number = 5
const finelResult = addTen(square(number))
console.log(finelResult)