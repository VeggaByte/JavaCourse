// spread(...) crea una copia de array
// spread combina arrays
// spread(...) crea un nuevo array
// se le pueden pasar parametros a una funcion


// copiando array - se usa para no putar o modificar valores
const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)


// Combinando arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const combinado = [...array1,...array2]
console.log(array1)
console.log(array2)
console.log(combinado)

// creando un nuevo array con mas elementos 

const arrayOriginal = [1,2,3]
const arrayAdicionado = [...arrayOriginal,4,5,6,`hola`]
console.log(arrayOriginal)
console.log(arrayAdicionado)


// pasando parametros a una funcion
function sum(a,b,c){
    return a + b + c
}

const numbers = [1,2,3]
const result = sum(...numbers) // en lugar de poner cada parametro ponemos esto y va uno por uno hasta llenar la funcion
console.log(numbers)
console.log(result)