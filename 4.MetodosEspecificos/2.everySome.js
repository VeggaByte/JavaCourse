//Every() evalua si un array cumple una condicion y no lo modifican porque es inmutable

const elemetos = [6,14,27,56,40]

//every
const evaluate = elemetos.every(elementos  => elementos >5)
console.log(elemetos)
console.log(evaluate)


// some()
const atLeastOneIsOver30 = elemetos.some(elemento => elemento >30) // some \ alguno
console.log(elemetos)
console.log(atLeastOneIsOver30)