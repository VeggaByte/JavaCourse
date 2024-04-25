// como crear un array ()
// formas de declarar arrays
// 1. new Array 
// 2. Array()


const frutas = Array('manzana','platano','orange')
console.log(frutas)

// si a un array le pasas solo un argumento con mueros lo tomara como tamaño del array
// es decir es del tamaño de 15 espacios y no esta guardado el 15 como tal
const numeros = Array(15)
console.log(numeros)

// en cambio esto se hace con diferentes argumentos
const numeross = Array(15,3,5,7)
console.log(numeross)

// sintaxis Array literal
// en este  ya funciona el unico argumento
const unNumero = [4]
console.log(unNumero)

// array vacio
const arregloVacio = []
console.log(arregloVacio)

// arreglo de array
const sports = ['futbbol','tennis','ajedrez']
console.log(sports)

// arreglo mixto
const recipe = [
    'carne',
    'harina',
    2,
    {ingrediente: 'leche', cantidad: '1 copa'}
]

// como acceder a un arreglo?
const primeraFruta = [frutas[0]]
console.log(primeraFruta)
// tama;o de un array length

const numeroDeFrutas = frutas.length
console.log(numeroDeFrutas)

// Mutabilidad e inmutabilidad de arrays
// un array bes un objeto y ppuede tener diferentes metodos
// mutable: el usuario lo hace Inmutable> el lenguaje lo crea

//Mutabilidad:

frutas.push('melon') // push agrega un valor al arreglo 
console.log(frutas)

// inmutabilidad
const nuevaFrutas = frutas.concat('kiwi', 'granada') // junta un array coon otro array, crea otro array nueva frutas con las frutas de las frutas
console.log(nuevaFrutas)

// revisar si un arreglo es un arreglo
const esArreglo = Array.isArray(frutas)
console.log(esArreglo)

//ejercicio practico: la suma de tiodos los elementos en un arreglo

const numeroArreglo = [1,2,3,4,5]
let sum = 0

for(let i = 0; i < numeroArreglo.length; i++){
    sum += numeroArreglo[i]
}
console.log(sum)