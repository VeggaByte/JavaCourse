// 1. entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero , typeof decimal)

// 2. Notacion cientiffica
const cientifico = 5e3

// 3. Infinitos y NaN
const infinitos = Infinity
const noEsunNumero = NaN

// operaciones aitmeticas
const suma = 3 + 4
const resta = 4-4
const multiplicacion = 4 * 4
const division = 5/5

// Modulo y exponenciacion

const modulo = 15 % 8 // modulo es para saber si un numero es multiplo de 1
const exponenciacion = 5 ** 5

// JS tiene algunos dilemas con la Presicion

const resultado = 0.1 + 0.2
console.log(resultado) // muestra demasiados numeros pero se puede hacer con un solo decimal de esta manera de abajo
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// operaciones avanzadas con librerias

const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio =  Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)
