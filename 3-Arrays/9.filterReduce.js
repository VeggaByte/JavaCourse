//Filter crea un nuevo array con los elementos de otro con una condicion
// por ejemplo que tome los numeros pares

// filter()
const numeros = [1,2,3,4,5,6,7,8,9]
const numerosPares = numeros.filter(num => num % 2 == 0)
console.log(numeros)
console.log(numerosPares)
// % el modulo lo que hace es dividir por ejemplo 4 / 2 quiere decir que cabe 2 veces el 2 en el cuatro por lo cual 2*2 = 0


// reduce() ejectua una funcion reductora sobre cada elemento del array devolviendo como resultado un solo valor
//reduce
const numerosReducidos = [1,2,3,4,5]
const sum = numerosReducidos.reduce((acumulador, valorActual)=> acumulador + valorActual, 0) // la funcion debe contener un acumulador y el valor actual
// es como si acumulador sea una variable en 0 que guarda la suma de cada uno de los cvalores del arreglo que estarian en valorActual el 10 la inicializa
console.log(numerosReducidos)
console.log(sum)




// reduce nos puede servir para saber que tanto se repite una palabra en un array
// reduce() caso 2

const palabras = ['manzana', 'platano', 'platano','pera', 'platano'] 
const frecuenciaPalabra = palabras.reduce((acumulador2, valorActual2) => {
    if(acumulador2[valorActual2]){
        acumulador2[valorActual2]++
    }else{
        acumulador2[valorActual2] = 1
    }
    return acumulador2
}, {})

console.log(frecuenciaPalabra)
