// funcion que tome un arreglo y un numero a buscar, debe regresar la posicion(indice) si no esta debe debolver -1

function buscarElemento(arreglo, buscarNumero){
let encontrado = arreglo.indexOf(buscarNumero)
    return encontrado

}

let arrowType = (a,b) => a.indexOf(b)

var elemento = 9
let arreglo = [1,2,3,4,9,6,7,8,9,10]

let respuesta = buscarElemento(arreglo,elemento)

console.log(respuesta)
console.log(arrowType(arreglo,elemento)) // tambien se puede hacer let variable = arrowtype(arreglo,elemento)