//null
const snoopy = null //es tipo objeto pero es un dato primitivo
console.log(snoopy)
console.log(typeof snoopy)

// Undefined
let name
console.log(name) // es indefinido, es una variable pero sin asignacion de valor


// Simbol para tipos de datos que no queremos que cambien
const uniqueId = Symbol('id')
const symbol1 = Symbol('1')
const symbol2 = Symbol('1')

console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user) // UTIL PARA EDITAR COLICIONES


//BigInt
const bigNumber = 6544515616515616515616511561n
console.log(bigNumber)

const numberOfParticules = 100000000000000000000000000000n
console.log(numberOfParticules)

