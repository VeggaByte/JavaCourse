
// array 1 dimension
let array1D = [1,2,3] // 3 columnas 1 fila, unidimensional

// array 2 dimensiones
let array2D = [[1,2,3],[4,5,6],[7,8,9]] // Bidimensional, en este caso no se ve tan claro pero seria asi:

let array2DExplicado = [ // este es como se veria el bidimensional 3 columnas y 3 filas
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// asi se modifica un valor, primero empieza desde cero como todo y el primer corchete es la fila y el segundo la columna
array2DExplicado[1][2] = 10
console.log(array2DExplicado)

let value = array2DExplicado[1][2]
console.log(value)

