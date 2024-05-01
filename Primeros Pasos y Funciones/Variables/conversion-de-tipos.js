// explicit type casting

const string = '42'
const integrer = parseInt(string)
console.log(integrer)
console.log(typeof integrer)

const stringDercimal = '3.14'
const float = parseFloat(stringDercimal)
console.log(float)
console.log(typeof float)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)


// implicito

const sum = '5' + 3 //concatena l numero y los vuelve strings
console.log(sum)

const sumWhithBoolean = '3' + true
console.log(sumWhithBoolean) // lo convierte en string

const sumWhiitNumber = 2 + true // suma el true a 1
console.log(sumWhiitNumber)

const stringValue = '10'
const numberValue = 10 
const bolleanValue = true

console.log(stringValue + stringValue) // concatena si hay strings
console.log(stringValue + numberValue)
console.log(stringValue + bolleanValue)
console.log(numberValue + numberValue)
console.log(numberValue + stringValue) // sin strings suma
console.log(numberValue + bolleanValue)
console.log(bolleanValue + stringValue)
console.log(bolleanValue + numberValue)
console.log(bolleanValue + bolleanValue)

console.log(stringValue + numberValue + bolleanValue)