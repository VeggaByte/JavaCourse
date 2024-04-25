function calculoPromedio(numeros){
    if(Array.isArray(numeros)){
        return "es un arreglo";
    } else{
        return"no es un arreglo";
    }
}
let numeros = [8,5,10,9,9,7,12,6]
let respuesta = calculoPromedio(numeros)
console.log(respuesta)