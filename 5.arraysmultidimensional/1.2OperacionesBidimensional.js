// Operaciones Arrays Bidimensionales
let array2DExplicado = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// recorrer un array bidimensional
for (let i = 0; i < array2DExplicado.length; i++) { // array2DExplicado.length es 3
    for (let z = 0; z < array2DExplicado[i].length; z++) { // array2DExplicado[i].length es 3
        console.log(array2DExplicado[i][z]); // imprime cada elemento individual
    }
}

function findElement(array2DExplicado,element){
    for (let i = 0; i < array2DExplicado.length; i++) { // array2DExplicado.length es 3
        for (let z = 0; z < array2DExplicado[i].length; z++) { // array2DExplicado[i].length es 3
            if(array2DExplicado[i][z] === element){
                return true 
            }
           
        }
    }
    return false
}

console.log(findElement(array2DExplicado, 7))

function duplicate (array2DExplicado){
    let newMatrix = []
    for(let i = 0; i < array2DExplicado; i++){
        newMatrix[i] = [...array2DExplicado[i]]
    }

    return newMatrix
}

console.log(duplicate(array2DExplicado))
