//Ejercicio 1
function cambiarValor(num) {
    num = 10;
    console.log("Dentro de la función: ", num); // 10
}

let miNumero = 5;
cambiarValor(miNumero);
console.log("Fuera de la función: ", miNumero); // 5


//ejercicio 2
function calcularImpuesto(precio) {
    let tasaImpuesto = 0.15; // Supongamos un 15% de impuesto
    return precio + (precio * tasaImpuesto);
}

let precioProducto = 100;
let precioConImpuesto = calcularImpuesto(precioProducto);

console.log("Precio Original: ", precioProducto); // 100
console.log("Precio con Impuesto: ", precioConImpuesto); // 115
