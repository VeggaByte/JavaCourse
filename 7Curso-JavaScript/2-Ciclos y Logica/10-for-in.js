// for in se utiliza para iterar con objetos inumerables ejemplo objeto.
// objeto es una estructura de datos diferentes a un array e string.
// a diferencia de los arrays y stings que solo son lista. objetos tienen propiedades y un valor.

/**


for in ---> objetos
propiedades = valor

arrays, strings == elementos dentro que generan una lista


ESTRUCTURA

for (variable in objeto){
// traduccion -> por cada elemento o propiedad en este obbjeto ejecuta este codigo:

}

 */


const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
}

for (frutas in listaDeCompras){
    console.log(frutas) // captura el contenido pero como capturar el valor?
}


for (frutas in listaDeCompras){
    console.log(`${frutas} : ${listaDeCompras[frutas]}`)
}
