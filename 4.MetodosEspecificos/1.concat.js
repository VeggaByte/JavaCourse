// concat es unir los elementos de diferentes arrays, 
//crea un nuevo array
// suma los arrays


// combinar con concat  1
const codigoMorse1 = ['....','---'] // h y o
const codigoMorse2 = ['.-..','.-'] // l y a

const mensaje = codigoMorse1.concat(codigoMorse2)
console.log(codigoMorse1)
console.log(codigoMorse2)
console.log(mensaje)

// combinar con concat  2
const mensaje2 = [].concat(codigoMorse1,codigoMorse2)
console.log(codigoMorse1)
console.log(codigoMorse2)
console.log(mensaje2)

// combine whit spread operator 

function combinar (codigoMorse1,codigoMorse2){
  console.log([...codigoMorse1,...codigoMorse2]) // le dice a js quiero que expandas ... este array con ... este array ... significan expandir
}
console.log(combinar(codigoMorse1,codigoMorse2))

// combine whit spread operator  strings
const numbers = [1,2,3]
const string = 'string'
console.log(combinar(numbers,string))

// JOIN hace que el array no este separado, te lo da en un solo valor
const morseCodeMessageString = mensaje.join('')//debemosd ecirle como acomodarlos, por ejemplo uno al lado del otro sin espacios ponemos ''
console.log(codigoMorse1)
console.log(codigoMorse2)
console.log(morseCodeMessageString)