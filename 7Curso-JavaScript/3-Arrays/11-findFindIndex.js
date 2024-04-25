// dos metodos que no modifican nuestro array pero nos ayudan a encontrar elementos e indices
// find nos devuuelve el primer elemento que cumpla con una condicion que le pedimaops en una funcion
// solo devuelve el primer valor que cuumple

const multiplo5 = [5,10,15,20]

const primerNumero =  multiplo5.find(numero => numero > 10)
console.log(multiplo5)
console.log(primerNumero) // 15



// findIndex() toma el array y nos devuelve el primer indice que cumpla la condicion
const numeroRandom = [7,5,4,7,8,10,2,396]
const indexN = numeroRandom.findIndex(num => num > 50)
console.log(numeroRandom)
console.log(indexN)