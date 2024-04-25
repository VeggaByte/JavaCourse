// metodos que modifican el array original (shift)(unshift)

//shift elimina el primer elemento de un array y lo devuelve 
const colors = ['amarillo', 'azul', 'rojo']
const removerColores = colors.shift()

console.log(colors)
console.log(removerColores)

//unshift agrega 1 o mas elementos en nuestro array al principio y regresa el tamaño de nuestro array 
const agregarColores = colors.unshift("perro", 'oso')
console.log(colors)
console.log(agregarColores)