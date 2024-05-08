const stringArray = ['manzana','platano','orange','kiwi','manzana']
const target = 'kiwi'

function findStringIndices (array, target){
    const resulter = {
        IncudeTargetStrings: false,
        primerIndice: -1,
        UltimoIndice: -1,
    }

    array.forEach((elemento, indice) =>{
    if (elemento.includes(target)){
        resulter.IncudeTargetStrings = true
        resulter.primerIndice = array.indexOf(target)
        resulter.UltimoIndice = array.lastIndexOf(target)
    }
    
    })
    return resulter
}

const resultado7 = findStringIndices(stringArray,target)
console.log(resultado7)