let stackDeLibros = ['48 leyes del poder', 'No eres tu', 'Invicto', 'Napoleon Hill']
console.log(`Tenemos esta coleccion ${stackDeLibros} que accion deseas hacer?`)
let salida = 0

function accion(){
while(salida == 0){
    let opcion = prompt("Por favor, ingresa un número del 1 al 3:")
    opcion = parseInt(opcion);
    switch(opcion){
        case 1:
        let agregar = stackDeLibros.push(prompt('Nombre del libro'))
        console.log(`Liosta actualizada a ${stackDeLibros}`)
        break
        case 2:
            if(stackDeLibros.length === 0){
                console.log("La libreria ya esta vacia")
            }else{
        let quitar = stackDeLibros.pop()
        console.log(`eliminando libro, se a actualizado \n ${stackDeLibros}`)
            }
        break
        case 3:
            console.log(`eSaliendo del programa \n ${stackDeLibros}`)
        salida = 1
}
}
}
accion()