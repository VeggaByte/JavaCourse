const numeroSecreto = Math.floor(Math.random() * 10 + 1) // math floor es un rango de numeros

const numeroJugador = parseInt(prompt("Que numero es ?"))

if(numeroJugador == numeroSecreto){
    console.log("MAMALON");
} else if(numeroJugador > numeroSecreto){
    console.log("excelente estabas muy arriba pero no hay pdo")
}
console.log(`Numero Jugado ${numeroJugador}`)
console.log(numeroSecreto)