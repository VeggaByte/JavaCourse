// includes() nos ayuda a saber iss hay un elemento que se incluya en un array
// por ejemplo busca el numero 3

const numbers = [1,2,3,4,5]
const result = numbers.includes(3)
console.log(result)


const result2 = numbers.includes(84)
console.log(result2)


// como saber el indice de un valor determinado con indexOf
// basicamente indexOf busca el primer elemento que cumpla dicha condicion y lo devuelve o bien regresa un -1 si no esta
//indexOf

const frutas = ['manzana','cereza','uva','sandia','mango']
const index1 = frutas.indexOf('cereza')
console.log(`indice: `,index1)
const index2 = frutas.indexOf('fruta')
console.log(`indice: `,index2)

// obtener el ultimo idice con cierta condicion

//lastIndexOf
const numberss = [2,4,6,8,10,10,6]
const lastIndex1 = numberss.lastIndexOf(6)
console.log(`indice: `,lastIndex1)

const lastIndex2 = numberss.lastIndexOf(1)
console.log(`indice: `,lastIndex2)


// encontrar los indices de una subcadena
//excercise encontrando sub strings indices

const stringArray = ['manzana','platano','orange','kiwi','manzana']
const target = 'platano'

function findStringIndices (array, target){
    const resulter = {
        IncudeTargetStrings: false,
        primerIndice: -1,
        UltimoIndice: -1,
    }

    array.forEach((elemento, indice) =>{
    if (elemento.includes(target)){
        resulter.IncudeTargetStrings = true
        resulter.primerIndice = indice
        resulter.UltimoIndice = array.lastIndexOf(target)
    }
    
    })
    return result
}

const resultado7 = findStringIndices(stringArray,target)
console.log(resultado7)