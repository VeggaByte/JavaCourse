function esArreglo(numeros){
    return Array.isArray(numeros)
}

function arregloNoVacio(numeros){
    return numeros.length > 0;
}

function todosSonNumeros(numeros){
    return numeros.every(elemento => typeof elemento === "number");
}

function calculoPromedio(numeros){
    if(!esArreglo(numeros))
    return "no es arreglo";

    if (!arregloNoVacio(numeros)){
        return "esta vacio";
    }
    if(!todosSonNumeros(numeros)){
        return "No todos son numeros";
    }
    let suma = numeros.reduce((sumaValor, valor) => sumaValor + valor,0)
    console.log("Es un arreglo")
    console.log("No esta vacio")
    console.log("Todos son numeros")
    return `El promedio de este arreglo es ${suma / numeros.length}`
}
let numeros = [8,5,10,9,9,7,12,6]
let respuesta = calculoPromedio(numeros)
console.log(respuesta)