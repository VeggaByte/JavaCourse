// Estas construyendo un juego de cartas simple, tiene un array representando un deck de cartas y deseas hacer lo siguiente:
//1. Deseas que el mazo se baraje aleatoriamente
//2. Repartir esas cartas entre el numero e jugadores que haya

const cartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const simbolos = ["♠︎", "♣︎", "♥︎", "♦︎"];
let baraja = [];

function mezclarCartasySimbolos(){
    for(let i = 0; i < simbolos.length; i++){
        for(let j = 0; j < cartas.length; j++){
             baraja.push(simbolos[i] + cartas[j]);
        }
    }
    console.log(baraja)
    for(let i = baraja.length - 1; i >= 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
}

mezclarCartasySimbolos();
console.log(baraja);
