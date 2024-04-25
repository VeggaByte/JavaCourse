// push agrega uno o dos o mas elementos al fianl del array y nos devuelve la longitud del array

// metodos que modifican el array original (mutabilidad)

const paises = ['USA', 'CANADA', 'UK']
const nuevosPaises = paises.push('ALEMANIA', 'AUSTRALIA')

console.log(paises)
console.log(nuevosPaises)


// pop nos elimina el ultimo elemento del array y nos devuelve el valor que fue removido
const removerPais = paises.pop()
console.log(paises)
console.log(removerPais)