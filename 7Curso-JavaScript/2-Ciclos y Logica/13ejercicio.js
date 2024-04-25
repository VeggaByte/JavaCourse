// Se asignan Variables
let intentos = 3
let listaDePalabras = ['python', 'java', 'javascript', 'c++', 'node']
let palabra 

// se escoge una palabra aleatoria del arreglo
let palabraOculta = listaDePalabras[Math.floor(Math.random() * listaDePalabras.length)]

console.log("Adivina la palabra oculta")
console.log("La palabra es un lenguaje de programacion")

do{
intentos -= 1
palabra = prompt("Cual es?")
if(intentos == 0){
    console.log(`suerte para la proxima la palabra era ${palabraOculta}`)
}else if(palabra !== palabraOculta) {
    console.log(`Tienes ${intentos} intentos`)

} else {
    console.log("felicidades adivinaste la palabra")
}

}while(intentos > 0 && palabra !== palabraOculta )

