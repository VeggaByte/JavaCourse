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
