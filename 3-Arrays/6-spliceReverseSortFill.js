// 4 Metodos de array que nos cambian el original
//splice, cambia el contenido de un array eliminando un elemento existente y agrega tambien nuevos elementos
// puede eliminar un elemento en cierto indice

// primero se pone la posicion donde queremos eliminar en este caso posicion 2 
//y a partir de ahi cuantos en adelante en este caso solo 1 porque si ponemos mas ejemplo 2 elimina el indice 3 tambien 
const vegetales = ['tomate', 'sandia', 'platano', 'granada']
const removerVegetales = vegetales.splice(2, 1, 'cebolla', 'pimiento') // 2 indice que queremos eliminar, 1 cuantos a partir de ahi queremos eliminar, despues  que elementos a agregar
console.log(vegetales)
console.log(removerVegetales)



// reverse()
// nos permite modificar nuestro arreglo a la inversa, ejemplo:

const numeros = [1,2,3,4,5]
const reverseNumeros = numeros.reverse()
console.log(numeros)
console.log(reverseNumeros)


// sort()
// organiza los elementos de un array ordenado por orden alfabetico
// sort con numeros
const unsortedNumbers1 = [4,18,1,62,34] // js pasa estos elementos a string por eso se ordenaq de esa manera
const modificacion = unsortedNumbers1.sort()
console.log(unsortedNumbers1) // los ordena en unicode y los ordena en orden
console.log(modificacion)


// sort con numeros 
const unsortedNumbers = [4,18,1,62,34]
const sortedNumbers = unsortedNumbers.sort((a,b) => a - b)
console.log(unsortedNumbers)
console.log(sortedNumbers)
// sort hace la resta del primer numero menos el segundo y dependiendo el resultado positivo o negativo los acomoda
//Al comparar 4 y 18 (a y b), 4 - 18 da -14, lo que significa que 4 se ordena antes que 18.


// sort() con Strings, los acomoda conforme a URF-16
const ciudades = ['Nueva York', 'Paris', 'Tokio', 'London']
const sortedCities = ciudades.sort()
console.log(ciudades)
console.log(sortedCities)


// FILL()
// cambia todos los valores por un valor estatico, desde el indice start 0 hatsa el ultimo

const edades = [21,35,45,50]
console.log(edades)
console.log(edades.fill(0,2,4)) // definimos de x posicion a x posicion para que lo llene de x cosa ejemplo
// console.log(edades.fill(0,2,4)) llena con ceros 0, desde la posicion 2 hasta la 4

// llenado completo desde una posicion en especifico
console.log(edades.fill(15, 1)) //llena de 15 desdde el 1 en adelante
console.log(edades.fill(15)) // llena todo el array completo