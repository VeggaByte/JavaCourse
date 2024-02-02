// strings primitivos (Inmutable)

const stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo tambien')
console.log(typeof stringPrimitivoTambien)

//String Objetos
const stringObjeto = new String('Soy un strjng objeto')
console.log(typeof stringObjeto)

// Accediendo a caracteres
// Nuestros Strings Tienen indices

const saludo = 'Hola. Como Estas?'
console.log(saludo[2]) //Se pone corchete
console.log(saludo.charAt(2)) // Se pone parentesis
console.log(saludo.indexOf("o")) //saber el index de la letra o
console.log(saludo.indexOf("xd")) // sale como -1 porque no esta en el string
console.log(saludo.lastIndexOf("o")) // Buscar la ultima letra
console.log(saludo.slice(3,5))
console.log(saludo.length) // saber el tamaño del string
console.log(saludo.toUpperCase()) //pasar a mayusculas
console.log(saludo.toLowerCase()) // pasar a minusculas

const saludodividido = saludo.split(' ')
console.log(saludodividido)
console.log(saludodividido[1])

const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Cambio')
console.log(nuevoSaludo)