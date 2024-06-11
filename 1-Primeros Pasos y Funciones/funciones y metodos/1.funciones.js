//  Calculo de un descuento sencillo
function descuento (precio){
    precio = precio - (precio * .20)
    return precio
}
let valor = 100
let valorDescuento = descuento(valor)
console.log(valorDescuento)




// Calculo de un descuento Intermedio
function descuentoAutomatico(precio,porcentaje){
let des = precio * (porcentaje / 100)
return precio - des
}
let precio = 200
let descuento = 20
let valdesc = descuentoAutomatico(precio,descuento)
console.log("el precio original es: " + precio + " con descuento es " + valdesc)
console.log(valdesc)