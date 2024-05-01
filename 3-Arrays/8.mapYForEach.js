// Map no modifica el array original pero si lo itera
// aplica una funcion a cada elemento de un array y construye un nuevo array con los resultados

// ejemplo un array 2 4 6 8 10 que multiplique sus valores por 2

const numbers = [1,2,3,4,5]
const cuadrados = numbers.map(num => num * num)

console.log(numbers)
console.log(cuadrados)

// forEach() itera sobre cada uno de los elementos del array y ejecuta una funcion proporcionada para cada elemento
// no crea un array nuevo*
// DEVUELVE ALGO PERO NO EN FORMA DE ARRAY

const colores = ['rojo', 'rosa', 'azul']
const iterarColores = colores.forEach(colores => console.log(colores))
console.log(colores)
console.log(iterarColores)


