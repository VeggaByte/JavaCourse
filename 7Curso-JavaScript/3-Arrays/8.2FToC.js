
const temperatura = [89,99,87,68,45]
const temperaturaEnC = temperatura.map(FTC => Math.floor((5/9) * (FTC - 32) ))
console.log(temperatura)
console.log(temperaturaEnC)


const arreglo = [1,2,3,4,5]
let suma = 0
arreglo.forEach(num =>{ suma += num})

console.log(suma)