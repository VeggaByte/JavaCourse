// Creacion de Strings
const primeraOpcion = 'Comillas Simples'
const segundaOpcion = "Comillas Dobles"
const terceraOpcion = `Comillas Simples`

// Concatenacion: opcion +
const direccion = "calle falsa 123"
const ciudad = "springfield"
const direccioCompleta = "mi direccion completa es " + direccion + ciudad
console.log(direccioCompleta)

const direccioCompletaConEspacio = 'Mi direccion completa es ' + direccion + ' ' + ciudad
console.log(direccioCompletaConEspacio)


//2. concatenacion: Template Literals
const nombre = 'Estefany'
const pais = 'colombia'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)


// 3. Concatenacion: Joint() es un metodo de strings
const primeraParte = 'Me encanta'
const segundaParte = 'La gente de'
const terceraParte = 'Mexico'
const pensamiento = [primeraParte, segundaParte,terceraParte]
console.log(pensamiento.join(' '))


// 4. Concatenacion: concat() es un metodo
const hobbie1 = 'Correr'
const hobbie2 = 'Saltar'
const hobbie3 = 'Volar cual cohete'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ',', hobbie2, ',', hobbie3, '.' )
console.log(hobbies)


// caracteres de escape
//const whatDoIDo = 'I' m Software Engineer '

// 1. escape alternativo
const escapeAlternativo = "I'm Software Engineer"

// 2. Barra Invertida
const barraInvertida = 'I\'m Software Engineer'

// .3 Template Literals
const escapeComillaInvertida = `I'm Software Engineer`

// .4 Escritura de strings largos

/*
Las rosas son Rojas,
las violetas son azules,
caracter inesperado,
en la linea 86
*/
const poema = 'Las rosas son Rojas \n'
 + 'las violetas son azules, \n'
  + 'caracter inesperado,\n '
   +  'en la linea 86'

console.log(poema)

   const poema2 = 'Las rosas son Rojas \n\
las violetas son azules, \n\
caracter inesperado,\n\
en la linea 86'

console.log(poema2)

const poema3 = `Las rosas son Rojas 
las violetas son azules, 
caracter inesperado,
en la linea 86`

console.log(poema3)

// String literal es cuando lo hacemos con comillas
// cuando ya se ve un resultado en pantalla de esos strings se les conoce como strings value