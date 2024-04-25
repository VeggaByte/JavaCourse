//loop for of = por cada elemento esta "cosa"

/*

for of se utiliza en objetos iterables (arrays y strinsg) son listas de algo

ESTRUCTURA
for(elemento of lista u objeto iterable){
    codigo
}
*/


let canasta = ["manzana","pera","naranja","uva"]

for (fruta of canasta){
    console.log(fruta)
}

// va a ir pasando por cada uno de los elementos y solo funciona si tenemos objetos iterables