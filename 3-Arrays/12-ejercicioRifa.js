// Verificar si una persona esta en la lista de personas ganadoras, solo debes ingresar el nombre o el numerom de tiket 
//el sistema debe verificar si existe


const ganadores = [
    {id: 1, nombre: 'Andres', Ticket: 11},
    {id: 25, nombre: 'Pablo', Ticket: 22},
    {id: 33, nombre: 'Eduardo', Ticket: 33},
    {id: 47, nombre: 'Jose', Ticket: 41},
]
function findWinnerByName (tiketNombre){ // aqio find crea un nuevo arreglo por lo cual se le pasa los parametros ganadores y de ahi los puedes llamar como sea por ejemplo persona.nombre
    const ganador = ganadores.find(persona => persona.nombre === tiketNombre || persona.Ticket == tiketNombre )
return InformacionDelGanador(ganador) || 'No se encontro el ganador'
}

function InformacionDelGanador (ganador){
    if (ganador !== undefined && ganador != null && ganador != 'No se encontro el ganador'){
    console.log(`Ganador: `, ganador)
}else{
    console.log("no se encontro ganador")
}}



let tiketNombre = prompt('Nombre o Tiket')
console.log(findWinnerByName(tiketNombre))

















// === Nota para estudio ===

// Este código utiliza el método find() para buscar un ganador pjkoor nombre o número de ticket en un array de objetos.

// La función find() itera sobre cada elemento del array y devuelve el primer elemento que cumple con la condición especificada en la función de callback.

// En la función de callback, se puede nombrar el parámetro que representa cada elemento del array como se desee. En este caso, lo llamamos "individuo" para hacer más claro que representa un único objeto dentro del array.

// Se accede a las propiedades de cada objeto utilizando el nombre del parámetro seguido de un punto y el nombre de la propiedad (por ejemplo, "individuo.nombre" para acceder al nombre del ganador).

// La comparación dentro de la función de callback verifica si el nombre del ganador coincide con el nombre ingresado por el usuario o si el número de ticket coincide con el ingresado.

// Si se encuentra un ganador que cumple con alguna de estas condiciones, se devuelve el objeto del ganador encontrado. De lo contrario, se devuelve un mensaje indicando que no se encontró ningún ganador.

// === Fin de la nota para estudio ===
