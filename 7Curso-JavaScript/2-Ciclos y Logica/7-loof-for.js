// el elemento for nos ayudara a iterar cada elemento en una lista

//estructura

//for(variable; condicion; incremento){
    //codigo a ejecutar 
//}


let list = ["eat","sleep","code","repeat"];

for(let i = 0; i < list.length; i++ ){
    console.log(list[i])
}

// ejercicio personal

let suma = 0

for(let d = 0; d <= 100; d++){
let numero = Math.floor(Math.random() *10 + 1)
suma += numero

}
console.log(suma)
console.log(suma / 100)