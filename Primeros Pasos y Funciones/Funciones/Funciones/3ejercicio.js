function calculoPromedio(numeros){
    //verificar si es un arreglo
    if(!Array.isArray(numeros)){
        return "no es un arreglo";
    }
    if(numeros.length === 0){ //Verificar si esta vacio
        return "Esta Vacio";
    }
    if(!numeros.every(elemento => typeof elemento === "number")){ // verifica si los elementos son de tipo number
    return "No todos son numeros"
    }
    let suma = numeros.reduce((suma, valores) => suma + valores,0);
    return suma / numeros.length
}
let numeros = [8,5,10,9,9,7,12,6]
let respuesta = calculoPromedio(numeros)
console.log(respuesta)