// switch revisa si se cumplen ciertos escenarios

/*
switch(expression){
    case valor1:
    // codigo 
        break;
    case valor2:
        // codigo
        break;
        case valor3:
    // codigo 
        break;
    case valor4:
        // codigo
        break;
    default:
        //codigo final
}
*/

let expr = "papayas"

switch(expr){
    case "Papayas": 
    case "papayas":
        console.log("cuesta  20 pesos el kilo")
        break;
    case "manzanas":
        console.log("manzana a 5.90 el kilo")
        break;
    default: console.log(`Mmamaste no hay ${expr}`)
    }


