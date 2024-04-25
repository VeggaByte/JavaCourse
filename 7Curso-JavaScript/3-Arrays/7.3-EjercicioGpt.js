const cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const simbolos = ["♠︎", "♣︎", "♥︎", "♦︎"];
let baraja = [];

function mezclarCartasySimbolos() {
    // Construir la baraja
    for(let i = 0; i < simbolos.length; i++) {
        for(let j = 0; j < cartas.length; j++) {
            baraja.push(simbolos[i] + cartas[j]);
        }
    }
    // Barajar la baraja
    for(let i = baraja.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
}

function repartirCartas(numJugadores, cartasPorJugador) {
    // Asegurarse de que la baraja ha sido mezclada
    if (baraja.length === 0) {
        mezclarCartasySimbolos();
    }
    
    // Inicializar manos de los jugadores
    let manos = [];
    for (let i = 0; i < numJugadores; i++) {
        manos.push([]);
    }
    
    // Repartir cartas
    for (let i = 0; i < cartasPorJugador; i++) {
        for (let j = 0; j < numJugadores; j++) {
            if (baraja.length > 0) {
                manos[j].push(baraja.pop()); // Toma la carta superior de la baraja
            }
        }
    }
    
    return manos;
}

mezclarCartasySimbolos();
console.log("Baraja mezclada:", baraja);
let manosJugadores = repartirCartas(4, 5); // Por ejemplo, 4 jugadores y 5 cartas cada uno
console.log("Manos de los jugadores:", manosJugadores);
